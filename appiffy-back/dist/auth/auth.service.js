"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nanoid_1 = require("nanoid");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../user/user.service");
const refreshSession_entity_1 = require("./entities/refreshSession.entity");
let AuthService = class AuthService {
    constructor(sessionRepository, userService, jwtService, configService) {
        this.sessionRepository = sessionRepository;
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUser(username, pass) {
        const user = await this.userService.getUserByUsername(username);
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(user) {
        const accessToken = await this.generateAccessToken({ id: user.id, username: user.username, email: user.email, role: user.role });
        const refreshToken = await this.generateRefreshToken({ id: user.id });
        await this.createRefreshSession(user.id, refreshToken);
        return {
            user,
            accessToken,
            refreshToken
        };
    }
    async createRefreshSession(userId, token) {
        const session = new refreshSession_entity_1.RefreshSession();
        const decodeToken = this.jwtService.decode(token);
        session.user = userId;
        session.refreshToken = token;
        session.expiresIn = decodeToken.exp;
        session.createdAt = decodeToken.iat;
        return await this.sessionRepository.save(session);
    }
    async generateAccessToken(payload) {
        const opts = {
            expiresIn: this.configService.get('JWT_ACCESS_EXPIRESIN'),
            subject: String(payload.id)
        };
        return this.jwtService.signAsync(payload, opts);
    }
    async generateRefreshToken(payload) {
        const opts = {
            expiresIn: this.configService.get('JWT_REFRESH_EXPIRESIN'),
            subject: String(payload.id)
        };
        return this.jwtService.signAsync({
            sid: (0, nanoid_1.nanoid)()
        }, opts);
    }
    async refreshToken(token) {
        try {
            var decodeToken = this.jwtService.verify(token);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        let user = await this.userService.getUserById(decodeToken.sub);
        let session = await this.sessionRepository.findOne({ where: { refreshToken: token } });
        if (!session)
            throw new common_1.UnauthorizedException();
        const accessToken = await this.generateAccessToken({ id: user.id, username: user.username, email: user.email, role: user.role });
        const refreshToken = await this.generateRefreshToken({ id: user.id });
        const decodeNewToken = this.jwtService.decode(refreshToken);
        session.createdAt = decodeNewToken.iat;
        session.expiresIn = decodeNewToken.exp;
        session.refreshToken = refreshToken;
        await this.sessionRepository.save(session);
        return {
            user,
            accessToken,
            refreshToken
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(refreshSession_entity_1.RefreshSession)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
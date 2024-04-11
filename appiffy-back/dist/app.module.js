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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const user_entity_1 = require("./user/entities/user.entity");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const refreshSession_entity_1 = require("./auth/entities/refreshSession.entity");
const project_module_1 = require("./projects/project.module");
const project_entity_1 = require("./projects/entities/project.entity");
const log_middleware_1 = require("./config/logs/log.middleware");
let AppModule = class AppModule {
    constructor() {
    }
    configure(consumer) {
        consumer.apply(log_middleware_1.LogMiddleware).forRoutes('/logs');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: true,
                logging: false,
                entities: [user_entity_1.User, refreshSession_entity_1.RefreshSession, project_entity_1.Project],
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            project_module_1.ProjectModule
        ],
        controllers: [app_controller_1.AppController]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
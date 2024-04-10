"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMiddleware = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
let LogMiddleware = class LogMiddleware {
    constructor() {
        this.logFilePath = 'logs.log';
    }
    use(req, res, next) {
        if (!fs.existsSync(this.logFilePath)) {
            return res.status(500).send('Log file does not exist');
        }
        const logs = fs.readFileSync(this.logFilePath, 'utf-8');
        console.log('logs here : ', logs);
        res.send(logs);
    }
};
LogMiddleware = __decorate([
    (0, common_1.Injectable)()
], LogMiddleware);
exports.LogMiddleware = LogMiddleware;
//# sourceMappingURL=log-middleware.js.map
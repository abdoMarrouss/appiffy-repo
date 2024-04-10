"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const log4js = require("log4js");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    log4js.configure({
        appenders: { everything: { type: 'file', filename: 'logs.log' } },
        categories: { default: { appenders: ['everything'], level: 'ALL' } }
    });
    const logger = log4js.getLogger();
    app.useLogger(logger);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
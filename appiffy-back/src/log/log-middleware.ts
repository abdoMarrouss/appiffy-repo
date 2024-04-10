import { Injectable, NestMiddleware } from '@nestjs/common';
import * as fs from 'fs';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  private readonly logFilePath: string = 'logs.log';

  use(req: Request, res: Response, next: NextFunction) {
    if (!fs.existsSync(this.logFilePath)) {
      return res.status(500).send('Log file does not exist');
    }

    const logs = fs.readFileSync(this.logFilePath, 'utf-8');
    console.log('logs here : ', logs)
    res.send(logs);
  }
}

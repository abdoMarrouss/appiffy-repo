import { Controller, Get, UseGuards } from "@nestjs/common";
import { GameService } from "./game.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";



@Controller("game")
export class GameController {
    
    constructor(private gameService: GameService) {}


    @Get()
    @UseGuards(JwtAuthGuard)
    getGameInfos() {
        return this.gameService.getGameInfo();
    }

}
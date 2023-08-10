import { Injectable } from "@nestjs/common";



@Injectable()
export class GameService {
    
    getGameInfo() {
        return "this is the game";
    }
}
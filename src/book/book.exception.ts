import { HttpException, HttpStatus } from "@nestjs/common";

export class bookException extends HttpException{
    constructor(){
        super('THIS IS CUSTOM book exception',HttpStatus.BAD_REQUEST)
    }

}
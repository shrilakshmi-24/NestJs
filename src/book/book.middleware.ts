import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";
let count=0
@Injectable()

export class BookMiddleware implements NestMiddleware{
    use(req:Request,res:Response,next:NextFunction){
        count++
       let protocol=req.protocol
       let host=req.get("host")
       let url=req.originalUrl
       let method=req.method
       let date=new Date().toDateString()
       console.log(protocol+"://"+host+url+" "+method+" "+date+" "+count)
        next()
    }

}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction,Request,Response } from 'express';

function globalMiddleware(req:Request,res:Response,next:NextFunction){
console.log("this is from global middleware")
next()
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware)
  await app.listen(3000);
  console.log("connected to port 3000")
}
bootstrap();

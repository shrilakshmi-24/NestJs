import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import {Request} from "express" 


@Injectable()
export class BookGuard implements CanActivate{
    
     public key="abcdef"
    canActivate(context: ExecutionContext): boolean {
      const ctx=context.switchToHttp()
      const request=ctx.getRequest<Request>()
      if(request.header("key")===undefined)
        return false
        if(request.header("key")===this.key) return true
    }
    
}
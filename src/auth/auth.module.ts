import { Module } from "@nestjs/common";
import { PassportLocalStrategy } from "./passport.local.strategy";
import { UserModule } from "src/users/users.module";

@Module({
    imports:[UserModule],
    controllers:[],
    providers:[PassportLocalStrategy],
    exports:[]
    
})
export class AuthModule{}
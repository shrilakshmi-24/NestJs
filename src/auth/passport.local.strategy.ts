import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/users.entity";
import { UserService } from "src/users/users.service";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.userService.getUserByName(username);
    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

import { Module } from '@nestjs/common';
import { bookModule } from './book/book.module';

import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';


@Module({
  imports: [bookModule,  UserModule,AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

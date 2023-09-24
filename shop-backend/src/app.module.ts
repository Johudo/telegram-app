import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { TgBotModule } from './tg-bot/tg-bot.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    TelegrafModule.forRoot({ token: process.env.TG_BOT_API_KEY }),
    UsersModule,
    TgBotModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { TgBotUpdate } from './tg-bot.update';

@Module({
  imports: [UsersModule],
  providers: [TgBotUpdate],
})
export class TgBotModule {}

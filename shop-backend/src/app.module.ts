import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { TgBotModule } from './tg-bot/tg-bot.module';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import { ProductsModule } from './products/products.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    TelegrafModule.forRoot({ token: process.env.TG_BOT_API_KEY }),
    I18nModule.forRoot({
      fallbackLanguage: 'ru',
      loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
      typesOutputPath: path.join(
        __dirname,
        '../src/generated/i18n.generated.ts',
      ),
    }),

    UsersModule,
    TgBotModule,
    ProductsModule,
  ],
})
export class AppModule {}

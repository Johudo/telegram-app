import { Start, Update, Ctx } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';

@Update()
export class TgBotUpdate {
  @Start()
  async onStart(@Ctx() ctx: Scenes.SceneContext) {
    console.log(await ctx.telegram.getChat(462087040));
    const photo = (await ctx.telegram.getUserProfilePhotos(ctx.message.from.id))
      .photos?.[0]?.[0];

    if (!photo) {
      return;
    }

    const link = await ctx.telegram.getFileLink(photo.file_id);
    console.log('User avatar', link.href);
  }
}

import { I18nService } from 'nestjs-i18n';
import { Start, Update, Ctx } from 'nestjs-telegraf';
import { I18nTranslations } from 'src/generated/i18n.generated';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { Scenes } from 'telegraf';

@Update()
export class TgBotUpdate {
  constructor(
    private readonly usersService: UsersService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  @Start()
  async onStart(@Ctx() ctx: Scenes.SceneContext) {
    const user = await ctx.telegram.getChat(462087040);
    const dbUser = await this.usersService.findOne(user.id);

    if (dbUser || user.type !== 'private') {
      return;
    }

    const avatar = (
      await ctx.telegram.getUserProfilePhotos(ctx.message.from.id)
    ).photos?.[0]?.[0];
    const avatarSrc = await ctx.telegram.getFileLink(avatar.file_id);

    const dto: CreateUserDto = {
      tid: user.id,
      tfirstName: user.first_name,
      tlastName: user.last_name,
      tusername: user.username,
      tbio: user.bio,
      tavatar: avatarSrc.toString(),
    };

    await this.usersService.create(dto);
    ctx.sendMessage(this.i18n.t('tg.WELCOME'));
  }
}

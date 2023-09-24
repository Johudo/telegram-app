import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as hmacSHA256 from 'crypto-js/hmac-sha256';
import * as querystring from 'querystring';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    const query = querystring.decode(
      'query_id=AAGA44obAAAAAIDjiht_CO18&user=%7B%22id%22%3A462087040%2C%22first_name%22%3A%22%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%22%2C%22last_name%22%3A%22%D0%97%D1%83%D0%B5%D0%B2%22%2C%22username%22%3A%22Johudo%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1695578954&hash=0df509760484533d8122e07fd30a966084ede290d45c8acd2b6c1ae1b3cecfcb',
    );
    const dataCheckString = `auth_date=${query.auth_date}\nquery_id=${query.query_id}\nuser=${query.user}`;
    const secret_key = hmacSHA256(
      '6530914796:AAFjaLc-vuUd-FiXhUoftbQ53UoTgiqMhmQ',
      'WebAppData',
    );

    console.log(
      hmacSHA256(dataCheckString, secret_key).toString() === query.hash,
    );

    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

import { Expose } from 'class-transformer';

export class GetUserDto {
  @Expose()
  readonly tid: number;

  @Expose()
  readonly tfirstName: string;

  @Expose()
  readonly tlastName: string;

  @Expose()
  readonly tusername: string;

  @Expose()
  readonly tbio: string;

  @Expose()
  readonly tavatar: string;
}

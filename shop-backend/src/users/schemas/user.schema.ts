import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  tid: number;

  @Prop()
  tfirstName: string;

  @Prop()
  tlastName: string;

  @Prop()
  tusername: string;

  @Prop()
  tbio: string;

  @Prop()
  tavatar: string;

  @Exclude()
  @Prop({ default: false })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

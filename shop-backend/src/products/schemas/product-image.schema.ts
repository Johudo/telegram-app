import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { uid } from 'uid';

export type ProductImageDocument = HydratedDocument<ProductImage>;

@Schema()
export class ProductImage {
  @Prop({ required: true, unique: true, default: uid })
  uid: number;

  @Prop({ required: true })
  src: string;

  @Prop()
  alt: string;
}

export const ProductImageSchema = SchemaFactory.createForClass(ProductImage);

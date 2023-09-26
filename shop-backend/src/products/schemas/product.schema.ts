import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { uid } from 'uid';
import { ProductImage } from './product-image.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true, unique: true, default: uid })
  uid: number;

  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop({ type: [ProductImage] })
  image: ProductImage[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductСharacteristicDocument =
  HydratedDocument<ProductСharacteristic>;

@Schema()
export class ProductСharacteristic {
  @Prop({ required: true, unique: true })
  key: string;

  @Prop()
  title: string;
}

export const ProductСharacteristicSchema = SchemaFactory.createForClass(
  ProductСharacteristic,
);

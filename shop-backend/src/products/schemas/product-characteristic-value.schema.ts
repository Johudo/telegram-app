import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductСharacteristic } from './product-characteristic.schema';

export type ProductСharacteristicValueDocument =
  HydratedDocument<ProductСharacteristicValue>;

@Schema()
export class ProductСharacteristicValue {
  @Prop({ required: true, unique: true })
  key: string;

  @Prop({ type: ProductСharacteristic })
  characteristic: ProductСharacteristic;

  @Prop()
  value: string;

  @Prop()
  text: string;
}

export const ProductСharacteristicValueSchema = SchemaFactory.createForClass(
  ProductСharacteristicValue,
);

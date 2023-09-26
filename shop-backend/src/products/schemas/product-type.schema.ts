import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { uid } from 'uid';
import { ProductСharacteristicValue } from './product-characteristic-value.schema';
import { Product } from './product.schema';

export type ProductTypeDocument = HydratedDocument<ProductType>;

@Schema()
export class ProductType {
  @Prop({ required: true, unique: true, default: uid })
  uid: number;

  @Prop({ type: Product })
  product: Product;

  @Prop({ type: [ProductСharacteristicValue] })
  characteristics: ProductСharacteristicValue[];

  @Prop()
  price: number;

  @Prop()
  count: number;
}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType);

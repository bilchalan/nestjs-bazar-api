import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class OrderedProductsDto {
  @IsNotEmpty({ message: 'Product can not be empty.' })
  id: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Price should be number & max decimal precission 2' },
  )
  @IsPositive({ message: 'Price can not be Negative.' })
  product_unit_price: number;

  @IsNumber({}, { message: 'Quantity should be number' })
  @IsPositive({ message: 'Quantity can not be Negative.' })
  product_quantity: number;
}

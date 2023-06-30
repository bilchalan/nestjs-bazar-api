import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty({ message: 'Product should not be empty.' })
  @IsNumber({}, { message: 'Product Id should be number' })
  productId: number;
  @IsNotEmpty({ message: 'ratings could not be empty' })
  @IsNumber()
  ratings: number;
  @IsNotEmpty({ message: 'comment should not be empty' })
  @IsString()
  comment: string;
}

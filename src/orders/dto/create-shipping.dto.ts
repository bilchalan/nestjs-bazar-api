import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateShippingDto {
  @IsNotEmpty({ message: 'Phone Can not be empty.' })
  @IsString({ message: 'Phone format should be string' })
  phone: string;

  @IsOptional()
  @IsString({ message: 'name format should be string' })
  name: string;

  @IsNotEmpty({ message: 'address Can not be empty.' })
  @IsString({ message: 'address format should be string' })
  address: string;

  @IsNotEmpty({ message: 'city Can not be empty.' })
  @IsString({ message: 'city format should be string' })
  city: string;

  @IsNotEmpty({ message: 'postCode Can not be empty.' })
  @IsString({ message: 'postCode format should be string' })
  postCode: string;

  @IsNotEmpty({ message: 'state Can not be empty.' })
  @IsString({ message: 'state format should be string' })
  state: string;

  @IsNotEmpty({ message: 'country Can not be empty.' })
  @IsString({ message: 'country format should be string' })
  country: string;
}

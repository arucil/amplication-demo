/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuctionWhereInput } from "./AuctionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AuctionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AuctionWhereInput,
  })
  @ValidateNested()
  @Type(() => AuctionWhereInput)
  @IsOptional()
  @Field(() => AuctionWhereInput, {
    nullable: true,
  })
  every?: AuctionWhereInput;

  @ApiProperty({
    required: false,
    type: () => AuctionWhereInput,
  })
  @ValidateNested()
  @Type(() => AuctionWhereInput)
  @IsOptional()
  @Field(() => AuctionWhereInput, {
    nullable: true,
  })
  some?: AuctionWhereInput;

  @ApiProperty({
    required: false,
    type: () => AuctionWhereInput,
  })
  @ValidateNested()
  @Type(() => AuctionWhereInput)
  @IsOptional()
  @Field(() => AuctionWhereInput, {
    nullable: true,
  })
  none?: AuctionWhereInput;
}
export { AuctionListRelationFilter as AuctionListRelationFilter };

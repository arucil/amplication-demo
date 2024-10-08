/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Bid } from "../../bid/base/Bid";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsNumber,
  Min,
  Max,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Jade } from "../../jade/base/Jade";
import { EnumAuctionStatus } from "./EnumAuctionStatus";

@ObjectType()
class Auction {
  @ApiProperty({
    required: true,
    type: () => [Bid],
  })
  @ValidateNested()
  @Type(() => Bid)
  @IsOptional()
  bids?: Array<Bid>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endingTime!: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  highestBid!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Jade,
  })
  @ValidateNested()
  @Type(() => Jade)
  @IsOptional()
  jade?: Jade | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  startingPrice!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startingTime!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumAuctionStatus,
  })
  @IsEnum(EnumAuctionStatus)
  @IsOptional()
  @Field(() => EnumAuctionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Auction as Auction };

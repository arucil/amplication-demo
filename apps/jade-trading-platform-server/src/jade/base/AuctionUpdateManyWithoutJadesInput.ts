/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AuctionWhereUniqueInput } from "../../auction/base/AuctionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AuctionUpdateManyWithoutJadesInput {
  @Field(() => [AuctionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuctionWhereUniqueInput],
  })
  connect?: Array<AuctionWhereUniqueInput>;

  @Field(() => [AuctionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuctionWhereUniqueInput],
  })
  disconnect?: Array<AuctionWhereUniqueInput>;

  @Field(() => [AuctionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuctionWhereUniqueInput],
  })
  set?: Array<AuctionWhereUniqueInput>;
}

export { AuctionUpdateManyWithoutJadesInput as AuctionUpdateManyWithoutJadesInput };

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
import { JadeWhereInput } from "./JadeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class JadeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JadeWhereInput,
  })
  @ValidateNested()
  @Type(() => JadeWhereInput)
  @IsOptional()
  @Field(() => JadeWhereInput, {
    nullable: true,
  })
  every?: JadeWhereInput;

  @ApiProperty({
    required: false,
    type: () => JadeWhereInput,
  })
  @ValidateNested()
  @Type(() => JadeWhereInput)
  @IsOptional()
  @Field(() => JadeWhereInput, {
    nullable: true,
  })
  some?: JadeWhereInput;

  @ApiProperty({
    required: false,
    type: () => JadeWhereInput,
  })
  @ValidateNested()
  @Type(() => JadeWhereInput)
  @IsOptional()
  @Field(() => JadeWhereInput, {
    nullable: true,
  })
  none?: JadeWhereInput;
}
export { JadeListRelationFilter as JadeListRelationFilter };

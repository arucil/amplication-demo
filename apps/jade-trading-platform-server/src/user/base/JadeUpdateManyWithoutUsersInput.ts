/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { JadeWhereUniqueInput } from "../../jade/base/JadeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class JadeUpdateManyWithoutUsersInput {
  @Field(() => [JadeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JadeWhereUniqueInput],
  })
  connect?: Array<JadeWhereUniqueInput>;

  @Field(() => [JadeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JadeWhereUniqueInput],
  })
  disconnect?: Array<JadeWhereUniqueInput>;

  @Field(() => [JadeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JadeWhereUniqueInput],
  })
  set?: Array<JadeWhereUniqueInput>;
}

export { JadeUpdateManyWithoutUsersInput as JadeUpdateManyWithoutUsersInput };

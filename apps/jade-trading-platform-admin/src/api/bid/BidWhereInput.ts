import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BidWhereInput = {
  amount?: FloatNullableFilter;
  auction?: AuctionWhereUniqueInput;
  bidTime?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

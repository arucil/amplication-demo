import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JadeWhereUniqueInput } from "../jade/JadeWhereUniqueInput";

export type AuctionWhereInput = {
  bids?: BidListRelationFilter;
  endingTime?: DateTimeNullableFilter;
  highestBid?: FloatNullableFilter;
  id?: StringFilter;
  jade?: JadeWhereUniqueInput;
  startingPrice?: FloatNullableFilter;
  startingTime?: DateTimeNullableFilter;
};

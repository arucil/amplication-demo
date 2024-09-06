import { AuctionListRelationFilter } from "../auction/AuctionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JadeWhereInput = {
  auctions?: AuctionListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  startingBid?: FloatNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

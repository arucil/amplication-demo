import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JadeListRelationFilter } from "../jade/JadeListRelationFilter";

export type UserWhereInput = {
  bids?: BidListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  jades?: JadeListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};

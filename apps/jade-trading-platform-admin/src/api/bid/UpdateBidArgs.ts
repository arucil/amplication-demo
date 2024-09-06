import { BidWhereUniqueInput } from "./BidWhereUniqueInput";
import { BidUpdateInput } from "./BidUpdateInput";

export type UpdateBidArgs = {
  where: BidWhereUniqueInput;
  data: BidUpdateInput;
};

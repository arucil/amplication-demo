import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BidCreateInput = {
  amount?: number | null;
  auction?: AuctionWhereUniqueInput | null;
  bidTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};

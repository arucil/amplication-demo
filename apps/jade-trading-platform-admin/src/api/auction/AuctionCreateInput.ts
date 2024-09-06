import { BidCreateNestedManyWithoutAuctionsInput } from "./BidCreateNestedManyWithoutAuctionsInput";
import { JadeWhereUniqueInput } from "../jade/JadeWhereUniqueInput";

export type AuctionCreateInput = {
  bids?: BidCreateNestedManyWithoutAuctionsInput;
  endingTime?: Date | null;
  highestBid?: number | null;
  jade?: JadeWhereUniqueInput | null;
  startingPrice?: number | null;
  startingTime?: Date | null;
};

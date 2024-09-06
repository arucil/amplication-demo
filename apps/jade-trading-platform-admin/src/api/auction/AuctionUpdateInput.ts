import { BidUpdateManyWithoutAuctionsInput } from "./BidUpdateManyWithoutAuctionsInput";
import { JadeWhereUniqueInput } from "../jade/JadeWhereUniqueInput";

export type AuctionUpdateInput = {
  bids?: BidUpdateManyWithoutAuctionsInput;
  endingTime?: Date | null;
  highestBid?: number | null;
  jade?: JadeWhereUniqueInput | null;
  startingPrice?: number | null;
  startingTime?: Date | null;
};

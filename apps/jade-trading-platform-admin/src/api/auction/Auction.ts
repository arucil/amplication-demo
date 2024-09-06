import { Bid } from "../bid/Bid";
import { Jade } from "../jade/Jade";

export type Auction = {
  bids?: Array<Bid>;
  createdAt: Date;
  endingTime: Date | null;
  highestBid: number | null;
  id: string;
  jade?: Jade | null;
  startingPrice: number | null;
  startingTime: Date | null;
  updatedAt: Date;
};

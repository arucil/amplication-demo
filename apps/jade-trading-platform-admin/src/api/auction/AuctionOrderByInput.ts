import { SortOrder } from "../../util/SortOrder";

export type AuctionOrderByInput = {
  createdAt?: SortOrder;
  endingTime?: SortOrder;
  highestBid?: SortOrder;
  id?: SortOrder;
  jadeId?: SortOrder;
  startingPrice?: SortOrder;
  startingTime?: SortOrder;
  updatedAt?: SortOrder;
};

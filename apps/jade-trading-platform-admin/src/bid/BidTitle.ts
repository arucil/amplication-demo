import { Bid as TBid } from "../api/bid/Bid";

export const BID_TITLE_FIELD = "id";

export const BidTitle = (record: TBid): string => {
  return record.id?.toString() || String(record.id);
};

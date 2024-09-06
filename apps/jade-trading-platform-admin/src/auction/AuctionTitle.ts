import { Auction as TAuction } from "../api/auction/Auction";

export const AUCTION_TITLE_FIELD = "id";

export const AuctionTitle = (record: TAuction): string => {
  return record.id?.toString() || String(record.id);
};

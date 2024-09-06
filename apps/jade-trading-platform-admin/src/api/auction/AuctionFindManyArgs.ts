import { AuctionWhereInput } from "./AuctionWhereInput";
import { AuctionOrderByInput } from "./AuctionOrderByInput";

export type AuctionFindManyArgs = {
  where?: AuctionWhereInput;
  orderBy?: Array<AuctionOrderByInput>;
  skip?: number;
  take?: number;
};

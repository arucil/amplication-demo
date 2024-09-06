import { BidWhereInput } from "./BidWhereInput";
import { BidOrderByInput } from "./BidOrderByInput";

export type BidFindManyArgs = {
  where?: BidWhereInput;
  orderBy?: Array<BidOrderByInput>;
  skip?: number;
  take?: number;
};

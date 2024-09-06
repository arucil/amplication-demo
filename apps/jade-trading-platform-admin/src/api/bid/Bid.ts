import { Auction } from "../auction/Auction";
import { User } from "../user/User";

export type Bid = {
  amount: number | null;
  auction?: Auction | null;
  bidTime: Date | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

import { Auction } from "../auction/Auction";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Jade = {
  auctions?: Array<Auction>;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  startingBid: number | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};

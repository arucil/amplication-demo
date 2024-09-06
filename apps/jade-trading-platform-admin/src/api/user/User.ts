import { Bid } from "../bid/Bid";
import { Jade } from "../jade/Jade";
import { JsonValue } from "type-fest";

export type User = {
  bids?: Array<Bid>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  jades?: Array<Jade>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

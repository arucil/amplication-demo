import { AuctionUpdateManyWithoutJadesInput } from "./AuctionUpdateManyWithoutJadesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JadeUpdateInput = {
  auctions?: AuctionUpdateManyWithoutJadesInput;
  description?: string | null;
  image?: InputJsonValue;
  startingBid?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};

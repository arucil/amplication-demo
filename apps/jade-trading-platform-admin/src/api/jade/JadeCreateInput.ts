import { AuctionCreateNestedManyWithoutJadesInput } from "./AuctionCreateNestedManyWithoutJadesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JadeCreateInput = {
  auctions?: AuctionCreateNestedManyWithoutJadesInput;
  description?: string | null;
  image?: InputJsonValue;
  startingBid?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};

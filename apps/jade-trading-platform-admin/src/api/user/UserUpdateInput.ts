import { BidUpdateManyWithoutUsersInput } from "./BidUpdateManyWithoutUsersInput";
import { JadeUpdateManyWithoutUsersInput } from "./JadeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bids?: BidUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  jades?: JadeUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};

import { BidCreateNestedManyWithoutUsersInput } from "./BidCreateNestedManyWithoutUsersInput";
import { JadeCreateNestedManyWithoutUsersInput } from "./JadeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bids?: BidCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  jades?: JadeCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};

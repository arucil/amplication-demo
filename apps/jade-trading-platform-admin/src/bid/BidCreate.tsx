import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { AuctionTitle } from "../auction/AuctionTitle";
import { UserTitle } from "../user/UserTitle";

export const BidCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="auction.id" reference="Auction" label="Auction">
          <SelectInput optionText={AuctionTitle} />
        </ReferenceInput>
        <DateTimeInput label="bidTime" source="bidTime" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

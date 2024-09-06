import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AUCTION_TITLE_FIELD } from "./AuctionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { JADE_TITLE_FIELD } from "../jade/JadeTitle";

export const AuctionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endingTime" source="endingTime" />
        <TextField label="highestBid" source="highestBid" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Jade" source="jade.id" reference="Jade">
          <TextField source={JADE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startingPrice" source="startingPrice" />
        <TextField label="startingTime" source="startingTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bid" target="auctionId" label="Bids">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="Auction"
              source="auction.id"
              reference="Auction"
            >
              <TextField source={AUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="bidTime" source="bidTime" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

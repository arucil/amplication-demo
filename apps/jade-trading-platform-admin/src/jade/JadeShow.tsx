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

import { JADE_TITLE_FIELD } from "./JadeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JadeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="startingBid" source="startingBid" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Auction"
          target="jadeId"
          label="Auctions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

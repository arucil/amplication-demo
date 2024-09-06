import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JADE_TITLE_FIELD } from "../jade/JadeTitle";

export const AuctionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Auctions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

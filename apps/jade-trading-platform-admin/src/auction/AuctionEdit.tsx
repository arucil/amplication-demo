import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BidTitle } from "../bid/BidTitle";
import { JadeTitle } from "../jade/JadeTitle";

export const AuctionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bids"
          reference="Bid"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BidTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="endingTime" source="endingTime" />
        <NumberInput label="highestBid" source="highestBid" />
        <ReferenceInput source="jade.id" reference="Jade" label="Jade">
          <SelectInput optionText={JadeTitle} />
        </ReferenceInput>
        <NumberInput label="startingPrice" source="startingPrice" />
        <DateTimeInput label="startingTime" source="startingTime" />
      </SimpleForm>
    </Edit>
  );
};

import { registerEnumType } from "@nestjs/graphql";

export enum AuctionStatus {
    InAuction = "in-auction",
    AuctionEnded = "auction-ended"
}

registerEnumType(AuctionStatus, {
    name: "AuctionStatus",
  });
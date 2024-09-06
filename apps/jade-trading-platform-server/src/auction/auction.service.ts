import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuctionServiceBase } from "./base/auction.service.base";

@Injectable()
export class AuctionService extends AuctionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

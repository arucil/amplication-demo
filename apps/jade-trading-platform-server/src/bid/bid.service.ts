import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BidServiceBase } from "./base/bid.service.base";

@Injectable()
export class BidService extends BidServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

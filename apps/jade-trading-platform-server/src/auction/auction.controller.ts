import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuctionService } from "./auction.service";
import { AuctionControllerBase } from "./base/auction.controller.base";

@swagger.ApiTags("auctions")
@common.Controller("auctions")
export class AuctionController extends AuctionControllerBase {
  constructor(
    protected readonly service: AuctionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

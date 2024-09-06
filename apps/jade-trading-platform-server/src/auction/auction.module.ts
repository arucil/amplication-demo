import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuctionModuleBase } from "./base/auction.module.base";
import { AuctionService } from "./auction.service";
import { AuctionController } from "./auction.controller";
import { AuctionResolver } from "./auction.resolver";

@Module({
  imports: [AuctionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuctionController],
  providers: [AuctionService, AuctionResolver],
  exports: [AuctionService],
})
export class AuctionModule {}

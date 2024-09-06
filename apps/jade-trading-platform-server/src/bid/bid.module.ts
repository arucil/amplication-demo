import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BidModuleBase } from "./base/bid.module.base";
import { BidService } from "./bid.service";
import { BidController } from "./bid.controller";
import { BidResolver } from "./bid.resolver";

@Module({
  imports: [BidModuleBase, forwardRef(() => AuthModule)],
  controllers: [BidController],
  providers: [BidService, BidResolver],
  exports: [BidService],
})
export class BidModule {}

import { Module } from "@nestjs/common";
import { NvmService } from "./nvm.service";
import { NvmController } from "./nvm.controller";
import { NvmResolver } from "./nvm.resolver";

@Module({
  controllers: [NvmController],
  providers: [NvmService, NvmResolver],
  exports: [NvmService],
})
export class NvmModule {}

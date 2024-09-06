import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JadeModuleBase } from "./base/jade.module.base";
import { JadeService } from "./jade.service";
import { JadeController } from "./jade.controller";
import { JadeResolver } from "./jade.resolver";

@Module({
  imports: [JadeModuleBase, forwardRef(() => AuthModule)],
  controllers: [JadeController],
  providers: [JadeService, JadeResolver],
  exports: [JadeService],
})
export class JadeModule {}

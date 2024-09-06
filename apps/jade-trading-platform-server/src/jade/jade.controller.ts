import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JadeService } from "./jade.service";
import { JadeControllerBase } from "./base/jade.controller.base";

@swagger.ApiTags("jades")
@common.Controller("jades")
export class JadeController extends JadeControllerBase {
  constructor(
    protected readonly service: JadeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

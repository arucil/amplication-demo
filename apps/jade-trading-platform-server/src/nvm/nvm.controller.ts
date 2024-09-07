import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NvmService } from "./nvm.service";

@swagger.ApiTags("nvms")
@common.Controller("nvms")
export class NvmController {
  constructor(protected readonly service: NvmService) {}
}

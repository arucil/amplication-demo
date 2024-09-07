import * as graphql from "@nestjs/graphql";
import { NvmService } from "./nvm.service";

export class NvmResolver {
  constructor(protected readonly service: NvmService) {}
}

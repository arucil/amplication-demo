import { JadeWhereInput } from "./JadeWhereInput";
import { JadeOrderByInput } from "./JadeOrderByInput";

export type JadeFindManyArgs = {
  where?: JadeWhereInput;
  orderBy?: Array<JadeOrderByInput>;
  skip?: number;
  take?: number;
};

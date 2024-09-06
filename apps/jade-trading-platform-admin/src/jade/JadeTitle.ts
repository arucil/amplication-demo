import { Jade as TJade } from "../api/jade/Jade";

export const JADE_TITLE_FIELD = "title";

export const JadeTitle = (record: TJade): string => {
  return record.title?.toString() || String(record.id);
};

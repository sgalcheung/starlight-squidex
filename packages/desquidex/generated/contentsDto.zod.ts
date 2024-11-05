// Generated by ts-to-zod
import { z } from "zod";

import { statusInfoDtoSchema } from "./statusInfoDto.zod";

export const contentsDtoSchema = z.object({
  total: z.number(),
  statuses: z.array(statusInfoDtoSchema),
});

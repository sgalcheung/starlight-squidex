// Generated by ts-to-zod
import { z } from "zod";

export const scheduleJobDtoSchema = z.object({
  id: z.string(),
  status: z.string(),
  dueTime: z.date(),
  color: z.string(),
  scheduledBy: z.string(),
});

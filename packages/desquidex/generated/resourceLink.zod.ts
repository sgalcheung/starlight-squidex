// Generated by ts-to-zod
import { z } from "zod";

export const resourceLinkSchema = z.object({
  href: z.string(),
  method: z.string(),
  metadata: z.string().optional().nullable(),
});

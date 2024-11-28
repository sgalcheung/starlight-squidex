// Generated by ts-to-zod
import { z } from "zod";
import { resourceLinkSchema } from "./resourceLink.zod.js";

export const appDtoSchema = z.object({
  links: z.record(resourceLinkSchema),
  id: z.string(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  version: z.number(),
  created: z.date(),
  lastModified: z.date(),
  teamId: z.string().optional().nullable(),
  permissions: z.array(z.string()),
  canAccessApi: z.boolean(),
  canAccessContent: z.boolean(),
  roleName: z.string().optional().nullable(),
  roleProperties: z.record(z.any()),
});

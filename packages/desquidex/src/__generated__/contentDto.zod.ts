// Generated by ts-to-zod
import { z } from "zod";

import { resourceLinkSchema } from "./resourceLink.zod.js";
import { scheduleJobDtoSchema } from "./scheduleJobDto.zod.js";
import { fieldDtoSchema } from "./fieldDto.zod.js";

export const contentDtoSchema = z.object({
  links: z.record(resourceLinkSchema),
  id: z.string(),
  createdBy: z.string(),
  lastModifiedBy: z.string(),
  data: z.any().nullable(),
  referenceData: z.record(z.record(z.any())).optional(),
  created: z.date(),
  lastModified: z.date(),
  status: z.string(),
  newStatus: z.string().optional().nullable(),
  statusColor: z.string(),
  newStatusColor: z.string().optional().nullable(),
  editToken: z.string().optional().nullable(),
  scheduleJob: scheduleJobDtoSchema.optional(),
  schemaId: z.string(),
  schemaName: z.string().optional().nullable(),
  schemaDisplayName: z.string().optional().nullable(),
  referenceFields: z.array(fieldDtoSchema).optional().nullable(),
  isDeleted: z.boolean(),
  version: z.number(),
});
// Generated by ts-to-zod
import { z } from "zod";

import { fieldPropertiesDtoSchema } from "./fieldPropertiesDto.zod";
import { resourceLinkSchema } from "./resourceLink.zod";

const nestedFieldDtoSchema = z.any();

export const fieldDtoSchema = z.object({
  links: z.record(resourceLinkSchema),
  fieldId: z.number(),
  name: z.string(),
  isHidden: z.boolean(),
  isLocked: z.boolean(),
  isDisabled: z.boolean(),
  partitioning: z.string(),
  properties: fieldPropertiesDtoSchema,
  nested: z.array(nestedFieldDtoSchema).optional().nullable(),
});
import { articleSchema } from "./Articles";
import { introductionSchema } from "./Introduction";
import { z } from "astro/zod";

export enum SQUIDEX_CONTENT_SCHEMAS {
  INTRODUCTIONS = "introductions",
  ARTICLES = "articles",
}

export const getSquidexContentSchemaMapping = async (): Promise<
  Record<SQUIDEX_CONTENT_SCHEMAS, z.ZodTypeAny>
> => {
  return {
    [SQUIDEX_CONTENT_SCHEMAS.INTRODUCTIONS]: introductionSchema, //await introductionSchema(),
    [SQUIDEX_CONTENT_SCHEMAS.ARTICLES]: articleSchema, //await articleSchema(),
  };
};

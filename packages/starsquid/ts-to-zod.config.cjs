/**
 * ts-to-zod configuration.
 *
 * @type {import("ts-to-zod").TsToZodConfig}
 */
module.exports = [
  {
    name: "appDto",
    input: "node_modules/@squidex/squidex/generated/models/AppDto.d.ts",
    output: "./generated/appDto.zod.ts",
  },
  {
    name: "resourceLink",
    input: "node_modules/@squidex/squidex/generated/models/ResourceLink.d.ts",
    output: "./generated/resourceLink.zod.ts",
  },
  {
    name: "featureDto",
    input: "node_modules/@squidex/squidex/generated/models/FeatureDto.d.ts",
    output: "./generated/featureDto.zod.ts",
  },
  {
    name: "featuresDto",
    input: "node_modules/@squidex/squidex/generated/models/FeaturesDto.d.ts",
    output: "./generated/featuresDto.zod.ts",
  },
  {
    name: "scheduleJobDto",
    input: "node_modules/@squidex/squidex/generated/models/ScheduleJobDto.d.ts",
    output: "./generated/scheduleJobDto.zod.ts",
  },
  {
    name: "contentDto",
    input: "node_modules/@squidex/squidex/generated/models/ContentDto.d.ts",
    output: "./generated/contentDto.zod.ts",
  },
  {
    name: "statusInfoDto",
    input: "node_modules/@squidex/squidex/generated/models/StatusInfoDto.d.ts",
    output: "./generated/statusInfoDto.zod.ts",
  },
  {
    name: "fieldPropertiesDto",
    input:
      "node_modules/@squidex/squidex/generated/models/FieldPropertiesDto.d.ts",
    output: "./generated/fieldPropertiesDto.zod.ts",
  },
  {
    name: "fieldDto",
    input: "node_modules/@squidex/squidex/generated/models/FieldDto.d.ts",
    output: "./generated/fieldDto.zod.ts",
  },
  {
    name: "nestedFieldDto",
    input: "node_modules/@squidex/squidex/generated/models/NestedFieldDto.d.ts",
    output: "./generated/nestedFieldDto.zod.ts",
  },
  {
    name: "contentsDto",
    input: "node_modules/@squidex/squidex/generated/models/ContentsDto.d.ts",
    output: "./generated/contentsDto.zod.ts",
  },
];

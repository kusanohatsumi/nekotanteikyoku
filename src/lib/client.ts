import { createClient, MicroCMSSchemaInfer } from "microcms-ts-sdk";

export const endpoint = process.env.NEXT_PUBLIC_SERVICE_DOMAIN;
export const APIKey = process.env.NEXT_PUBLIC_API_KEY;

if (endpoint === undefined) {
  throw new Error("error");
}
if (APIKey === undefined) {
  throw new Error("error");
}

export const client = createClient({
  serviceDomain: endpoint,
  apiKey: APIKey,
});

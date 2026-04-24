import { createClient, type SanityClient } from "@sanity/client";

const noopClient = {
  fetch: () => Promise.resolve([]),
} as unknown as SanityClient;

function initSanityClient(): SanityClient {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!projectId || !dataset) return noopClient;

  try {
    return createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    });
  } catch {
    return noopClient;
  }
}

export const sanityClient: SanityClient = initSanityClient();

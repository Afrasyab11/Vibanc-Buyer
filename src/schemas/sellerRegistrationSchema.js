import {z} from 'zod';

export const startupTypeSchema = z.object({
    startupType: z.enum([
      "content",
      "agency",
      "ecommerce",
      "other",
      "mobileapp",
      "shopify",
      "saaS",
      "marketplace",
    ]).refine(value => value !== '', {
        message: 'Startup type is required',
        path: ['startupType'], // Path to the field in the error object
      }),
  });
  

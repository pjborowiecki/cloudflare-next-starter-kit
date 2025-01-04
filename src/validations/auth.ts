import { z } from "zod";

export const sessionSechma = z.object({
  id: z.string().uuid(),
  expiresAt: z.number(),
  userId: z.string().uuid(),
  createdAt: z.string().datetime({ precision: 3 }),
  updatedAt: z.string().datetime({ precision: 3 }),
});

export type Session = z.infer<typeof sessionSechma>;

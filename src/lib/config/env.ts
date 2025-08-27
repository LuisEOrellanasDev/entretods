import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),

  JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters long'),

  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXTAUTH_URL: z.string().url().optional(),


  ENABLE_RATE_LIMITING: z.string().default('false').transform(val => val === 'true'),
  RATE_LIMIT_MAX: z.string().default('100').transform(val => parseInt(val, 10)),
  RATE_LIMIT_WINDOW: z.string().default('900000').transform(val => parseInt(val, 10)), // 15 minutes
});

export type Env = z.infer<typeof envSchema>;

let env: Env;

export function validateEnv(): Env {
  try {
    env = envSchema.parse(process.env);
    return env;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map(err => `${err.path.join('.')}: ${err.message}`);
      throw new Error(
        `Environment validation failed:\n${missingVars.join('\n')}\n\nPlease check your .env file.`
      );
    }
    throw error;
  }
}

export function getEnv(): Env {
  if (!env) {
    env = validateEnv();
  }
  return env;
}

if (typeof window === 'undefined') {
  try {
    validateEnv();
  } catch (error) {
    console.error('❌ Environment validation failed:', error);
  }
}

// ref: https://github.com/vercel/next.js/blob/canary/examples/with-supabase/utils/supabase/server.ts


import { Database } from '@/libs/supabase/types';
import { getEnvVar } from '@/utils/get-env-var';
import { createClient } from '@supabase/supabase-js';

export function createSupabaseClient() {
  return createClient<Database>(
    getEnvVar(process.env.NEXT_PUBLIC_SUPABASE_URL, 'NEXT_PUBLIC_SUPABASE_URL'),
    getEnvVar(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, 'NEXT_PUBLIC_SUPABASE_ANON_KEY')
  );
}

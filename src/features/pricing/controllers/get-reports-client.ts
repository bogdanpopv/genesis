import { createSupabaseClient } from '@/libs/supabase/supabase-client';

export async function getReportsClient(id?: string, niche?: string) {
  
  const supabase = createSupabaseClient();

  let query = supabase.from('reports').select("*");

  if (id) {
    query = query.eq('id', id);
  }

  if (niche) {
    query = query.eq('niche', niche);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error.message);
  }

  return data ?? (id ? null : []);
}

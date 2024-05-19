import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export async function getReports(id?: string) {
  const supabase = createSupabaseServerClient();

  let query = supabase.from('reports').select("*");

  if (id) {
    query = query.eq('id', id);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error.message);
  }

  return data ?? (id ? null : []);
}

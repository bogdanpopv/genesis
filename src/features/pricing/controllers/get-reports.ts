import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export async function getReports(id?: string, niche?: string) {
  const supabase = createSupabaseServerClient();

  let query = supabase.from('reports').select('*', { count: 'exact' });

  if (id) {
    query = query.eq('id', id);
  }

  if (niche) {
    query = query.eq('niche', niche);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error.message);
  }

  return { data: data ?? (id ? null : []), count: count ?? 0 };
}

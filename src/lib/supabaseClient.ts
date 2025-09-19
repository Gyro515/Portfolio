/**
 *  @file supabaseClient
 *  @description Initializes Supabase client and provides helper functions.
 */
import { createClient } from '@supabase/supabase-js';

/**
 * Instantiate Supabase client with env variables.
 */
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

/**
 * Retrieves the public URL for the assets stored in the Supabase storage bucket.
 *
 * @param kou Image URL or storage key.
 * @param bucket Supabase storage bucket, defaults to an empty string.
 * @returns Returns public image URL or an empty string.
 */
export function getPublicImageUrl(kou?: string | null, bucket = ''): string {
  if (!kou) return '';

  // Return if it is already a full URL.
  if (/^https?:\/\//i.test(kou)) return kou;

  // Create the public URL.
  const { data } = supabase.storage.from(bucket).getPublicUrl(kou);
  return data?.publicUrl ?? '';
}

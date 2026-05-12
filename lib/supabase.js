import { createClient } from '@supabase/supabase-js'

// Corregido: mzlq en lugar de mlq
const supabaseUrl = 'https://mzxlqqcaisuxqwbrhmhb.supabase.co'                      
const supabaseKey = 'sb_publishable_tiT9hcge6YdY-k23h9q-dA_8Hyc_aiv'
export const supabase = createClient(supabaseUrl, supabaseKey)

import { SupabaseClient } from "@supabase/supabase-js";

const supabaseclient = new SupabaseClient(
    process.env.PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SECRET as string,
)

export async function GET() {
    
    
}
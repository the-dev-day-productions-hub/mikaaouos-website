import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseclient = createClient(
    process.env.PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SECRET as string,
)

export async function GET() {
    const {data, error} = await supabaseclient
        .from('test_table')
        .select()
    
    console.log("defalt")    
    console.log(data)

    return Response.json({
        message: "helloworld",
    })

}
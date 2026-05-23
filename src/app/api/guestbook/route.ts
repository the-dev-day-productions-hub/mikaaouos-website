import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseclient = createClient(
    process.env.PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SECRET as string,
)

export async function GET() {
    const {data, error} = await supabaseclient
        .from('guestbook')
        .select()
        .order('created_at', {ascending: false} )
        .range(0,5) //temp range


    console.log("defalt")    
    console.log(data)

    if(error){
        return Response.json(
            error
        )
    }

    return Response.json(
        data
    )

}


// TODO: client can show the user an error message like "Try again later" for when insert isn't sucessful
export async function POST(request: Request) {
  const res = await request.json()
  console.log(res)
  return Response.json({ res })
}
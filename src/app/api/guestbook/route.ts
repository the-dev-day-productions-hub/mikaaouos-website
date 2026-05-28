import { createClient, SupabaseClient } from '@supabase/supabase-js'

const TABLE_NAME = 'guestbook'
const MAX_CONTENT_LENGTH = 50

const supabaseclient = createClient(
    process.env.PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SECRET as string,
)

export async function GET() {
    const {data, error} = await supabaseclient
        .from(TABLE_NAME)
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

  if(!res.author_name || !res.content){
    return Response.json({}, {
        status: 400,
        statusText: "Need Author or Content Input" 
    })
  }

  console.log(res.content.length)
  
  if(res.content.length == 0 || res.content.length > MAX_CONTENT_LENGTH) {
    return Response.json({}, {
        status: 400,
        statusText: "No Content or Content Too Long" 
    })
  }

  // Make a funny error 418 easter response
  const { error } = await supabaseclient
    .from(TABLE_NAME)
    .insert({author_name: res.author_name, content: res.content })

  console.log(error)

  console.log(res) // remove later
  return Response.json({ res })
}
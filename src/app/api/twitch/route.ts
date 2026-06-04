export async function GET(){
    const fetchToken = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ 
            client_id: `${process.env.TWITCH_CLIENT_ID}`,
            client_secret: `${process.env.TWITCH_CLIENT_SECRET}`,
            grant_type: "client_credentials"
        }) 
    })

    if (!fetchToken.ok) {
        return Response.json(
            { message: 'Failed to fetch access token' }, 
            { status: 500 }
        )
    }

    const accessToken = (await fetchToken.json()).access_token 

    const clips = await fetch("https://api.twitch.tv/helix/clips?"+
        new URLSearchParams({
            broadcaster_id: "557314779",
        }), {
        headers: {
            "Client-ID": `${process.env.TWITCH_CLIENT_ID}`,
            "Authorization": `Bearer ${accessToken}`
        }
    })

    if (!clips.ok) {
        return Response.json(
            { message: 'Failed to fetch clips' }, 
            { status: 500 }
        )
    }

    return Response.json((await clips.json()))
}
export async function GET(){
    const fetchToken = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ 
            grant_type: "client_credentials",
            client_id: `${process.env.SPOTIFY_CLIENT_ID}`,
            client_secret: `${process.env.SPOTIFY_CLIENT_SECRET}`
        }) 
    })

    if (!fetchToken.ok) {
        return Response.json(
            { message: 'Failed to fetch access token' }, 
            { status: 500 }
        )
    }

    const accessToken = (await fetchToken.json()).access_token 

    const playlist = await fetch("https://api.spotify.com/v1/playlists/2qyQgtUVbLmPXyB02Zdpis", {
        headers: {
            authorization: `Bearer ${accessToken}`,
        },
    })

    // https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow



    return Response.json((await playlist.json()))
}
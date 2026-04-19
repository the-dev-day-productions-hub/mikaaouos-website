import 'dotenv/config' 



export async function GET() {
    
    
    const response = await fetch('https://discord.com/api/users/353192532751941632', {
        headers: {
            authorization: `Bot ${process.env.DISCORD_TOKEN}`,
        },
    })

    if (!response.ok){
        return Response.json(
            { message: 'Failed to fetch user data' }, 
            { status: 500 }
        )
    }

    // https://cdn.discordapp.com/
    //  avatars/user_id/user_avatar.png *
    // 	avatar-decoration-presets/avatar_decoration_data_asset.png

    const user = await response.json()


    return Response.json({ 
    message: 'Hello World',
    username : user.username,
    avatarImage : `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`,
    avatarDecoration : `https://cdn.discordapp.com/avatar-decoration-presets/${user.avatar_decoration_data.asset}.webp`
})

}
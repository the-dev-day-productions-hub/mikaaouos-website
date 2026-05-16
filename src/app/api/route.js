
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
    // guild-tag-badges/guild_id/badge_hash.png
    //  avatars/user_id/user_avatar.png *
    // 	avatar-decoration-presets/avatar_decoration_data_asset.png

    const user = await response.json()



    return Response.json({ 
    message: 'Hello World',
    username : user.global_name || user.username,
    clanTag : user.primary_guild.tag,
    clanImage : `https://cdn.discordapp.com/guild-tag-badges/${user.primary_guild.identity_guild_id}/${user.primary_guild.badge}`,
    avatarImage : `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
    avatarDecoration : `https://cdn.discordapp.com/avatar-decoration-presets/${user.avatar_decoration_data.asset}.png`,
    nameTagDecoration : `https://cdn.discordapp.com/assets/collectibles/${user.collectibles.nameplate.asset}static.png`
})

}
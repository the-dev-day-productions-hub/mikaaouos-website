import 'dotenv/config' 
import { Client, GatewayIntentBits, Events} from "discord.js" 
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(process.env.DISCORD_TOKEN);

client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


export async function GET() {
    const user = await client.users.fetch('353192532751941632')
    return Response.json({ 
    message: 'Hello World',
    avatarDecoration : user.avatarDecorationURL(),
    avatarImage : user.displayAvatarURL()
})

}
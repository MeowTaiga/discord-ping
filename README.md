# discord-ping

Get a ping to one of your discord channels! Set unique actions, so you get notified when something happens on your website straight to your discord server.

## What this does
get notifications on your phone, have interactions with users about website updates, possiblities are endless.

![Showcase](https://i.imgur.com/vaFiBkI.png)

## Installation

```bash
npm i @aisaka/discord-ping
```

## Usage

```
import {pingDiscord} from '@aisaka/discord-ping'

...

const options = {
    title: `Your Embed title`, //big title on your discord message
    desc: `Something happened on my sight!`, //embed description field
    location: true, //true default
    color: '#2a2a2a' //Color of your message, blue by default
}


pingDiscord(YOUR_WEBHOOK_URL, options);

...

```

## Getting a discord webhook URL
Go into a server you have webhook permissions for, and follow the screen shots below.

![Step one](https://i.imgur.com/z0qLDfU.png)
![Step two](https://i.imgur.com/r1nUGCX.png)
![Step three](https://i.imgur.com/PrXMUXN.png)

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

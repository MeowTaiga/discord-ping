import axios from 'axios';


export const pingDiscord = ({webhook, options}) => {

    /*
        Discord webook url example:
        https://discordapp.com/api/webhooks/775393866525179984/76EDGU04uyMiLBgqWdgi5mbf4NizVLbOguBR_3HiIlGSY9YaqT-qcZ3bKgjo-LJU3-xm

    */

    if(!webhook) throw new TypeError("pingDiscord requires a webhook URL!");
    if(!webhook.includes('https://discordapp.com/api/webhooks/')) throw new TypeError("pingDiscord invalid webhook url!");
    if(!options) throw new TypeError("pingDiscord requires options!");
    if(!options.title) throw new TypeError("pingDiscord expects options.title");
    let location = options.location === false ? false : true;

    axios.get('https://freegeoip.app/json/').then(l => {

    const useLocation = l.data;

    postData(webhook, { "embeds": [
        {
          "title": options.title,
          "description": options.desc ? options.desc : 'Someone viewd your site!',
          "color": options.color ? options.color : 7506394,
          "footer": {
            "text": location ? `Location: ${useLocation.country_code}, ${useLocation.city}, ${useLocation.region_code}` : 'pingDiscord'
          },
        }]})
        .then(data => {
            console.log(location)
            console.log(data);
        });
    });

}



async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response;
}

#!/usr/bin/env node

var axios = require('axios'),
fs = require('fs');
(async () => {
var data = await axios.get(`http://en.gravatar.com/${process.argv[2] || 'github'}.json`)
console.log('Username : '+ data.data.entry[0].preferredUsername + ', Name : ' + data.data.entry[0].displayName )
image = await axios.get(data.data.entry[0].thumbnailUrl, {responseType: 'arraybuffer'})
fs.writeFileSync(`./${data.data.entry[0].preferredUsername}.png`, image.data, (err) => {
    if (err) throw err;
})
console.log(`Downloaded image => ${data.data.entry[0].preferredUsername}.png `)
})();

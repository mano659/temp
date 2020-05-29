/* Write a small program which will use cheerio library to parse a URL and print all meta tags in the url. */

const cheerio = require('cheerio');
const request = require('request');


function getAllTags(url) {
    request({
        method: 'GET',
        url: url
    }, (err, res, body) => {
    
        if (err) {
            //Error handling
            return console.error(err);
        }

        let $ = cheerio.load(body);

        let metaTags = $('meta');
    
        metaTags.forEach((tag) => {
            console.log(tag);
        });
    });
}

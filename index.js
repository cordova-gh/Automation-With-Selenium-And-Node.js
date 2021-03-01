
const Page = require('./lib/homePage');
const open = require('open');

const { exec } = require("child_process");

const arraySites = ["http://www.google.it"
    , "https://www.torinotoday.it/"
    , "https://www.corriere.it/"
    , "http://leggo.it"
    , "http://trome.pe"
    , "http://elcomercio.pe"
    , "https://www.apple.com/"
    , "https://angular.io/"
    , "https://www.lego.com/it-it"
    , "https://www.feedmusic.it/"
    , "https://simplychocolate.dk/"
    , "http://randomcolour.com/"
    , "https://www.netflix.com/it/"
    , "https://www.legami.com/it_it/"
    , "https://www.ikea.com/it/it/"
    , "https://www.maisonsdumonde.com/IT/it"
    , "https://www.mrw.it/"
    , "https://github.com/"
    , "https://www.instagram.com/"
    , "https://www.samsung.com/it/"
    , "http://www.donothingfor2minutes.com/"
    , "http://wxs.ca/iso/"
    , "http://motherfuckingwebsite.com/"
    , "http://www.papertoilet.com/"
    , "https://dirtycode.io/"
    , "https://www.cannabisbarcelona.com/it/cannabis-barcelona-3"
    , "https://www.youtube.com/"];



var CronJob = require('cron').CronJob;
var job = new CronJob('5 * * * * *', function () {
    console.log(new Date() + ' eseguo')
    open(arraySites[between(0, arraySites.length)]);
    /*exec("npm test", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });*/
}, null, true, 'America/Los_Angeles');

job.start();


function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

const Page = require('./lib/homePage');
const open = require('open');

const { exec } = require("child_process");

const arraySites = ["http://www.google.it"
                , "https://www.torinotoday.it/" 
                , "https://www.corriere.it/"
                , "http://leggo.it"
                , "http://trome.pe"
                , "http://elcomercio.pe"];



var CronJob = require('cron').CronJob;
var job = new CronJob('5 * * * * *',  function() {
    console.log(new Date()+' eseguo')
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
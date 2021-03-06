const {Builder, By, until} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
let o = new chrome.Options();
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
o.setChromeBinaryPath("/Applications/Brave\ Browser.app/Contents/MacOS/Brave\ Browser");
o.addArguments("user-data-dir=/Users/geancarlocordova/Library/Application\ Support/BraveSoftware/Brave-Browser");
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false });


var Page = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        //.setBinary("/Applications/Brave Browser.app/Contents/MacOS/Brave Browse")
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };

    this.openNewTab= async function(){
        return await driver.switchTo().newWindow('tab');
    }
    this.refresh= async function(){
        return await driver.navigate().refresh();
    }
};

module.exports = Page;
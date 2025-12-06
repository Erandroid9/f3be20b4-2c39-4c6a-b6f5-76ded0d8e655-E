export const TWITTER = (username) => {

    var twitterLink = "https://twitter.com/" + encodeURIComponent(username);

    CHECKER(navigator.onLine,()=>{

        window.open(twitterLink);

    });

};
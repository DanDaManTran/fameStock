//different required packaged that is needed for this app
var request = require("request");
var Twitter = require('twitter');

var fs = require('fs');

//this function will run if the action is mytweets so it can go into the tweeter api
// function tweets() {
// 	var client = new Twitter(require("./keys.js").twitterKeys);

// 	//runing the twitter api and if there is an error then it would display if not then it would produce the 20 most recent tweets and logging it into the log.txt
// 	client.get('statuses/user_timeline', {screen_name: "realDonaldTrump", count: 20}, function(error, tweets, response) {

// 		if(error) {
// 			console.log('Error occurred: ' + error);
// 			return;

// 		} else {
// 			for(var i = 0; i<tweets.length; i++) {

// 				info = {
// 					date: "",
// 					tweet: [],
// 					companyCheck: ""
// 				}

// 				console.log(tweets[i].created_at.substring(0, 19) + "\n" + 
// 							tweets[i].text + "\n");

// 				fs.appendFile("log.txt", "\n" + tweets[i].created_at.substring(0, 19) + "\n");

// 			}
// 		}
// 	});
// };
// console.log("hello");

// company.find("nintendo", function(err, response) {
//   console.log(response);
// });

//https://www.programmableweb.com/api/stock-quote/sdks stock api that we might use

// tweets();
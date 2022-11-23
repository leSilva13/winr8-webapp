const team= [{
    nombre:"100 Thieves",
    avPlayerKda:2.1,
    avPlayerWard:19,
    avDragonSlained:4
},{
    nombre:"Cloud9",
    avPlayerKda:2.5,
    avPlayerWard:22,
    avDragonSlained:2
},{
    nombre:"Clutch Gaming",
    avPlayerKda:1.9,
    avPlayerWard:15,
    avDragonSlained:2
},
{
    nombre:"Counter Logic Gaming",
    avPlayerKda:3,
    avPlayerWard:21,
    avDragonSlained:3
},
{
    nombre:"Echo Fox",
    avPlayerKda:3.2,
    avPlayerWard:31,
    avDragonSlained:2
},
{
    nombre:"FlyQuest",
    avPlayerKda:1.4,
    avPlayerWard:17,
    avDragonSlained:0
},
{
    nombre:"Golden Guardians",
    avPlayerKda:2.2,
    avPlayerWard:29,
    avDragonSlained:5
},
{
    nombre:"OpTic Gaming",
    avPlayerKda:0.9,
    avPlayerWard:25,
    avDragonSlained:2
},
{
    nombre:"Team Liquid",
    avPlayerKda:2.6,
    avPlayerWard:19,
    avDragonSlained:4
},
{
    nombre:"Team SoloMid",
    avPlayerKda:3.6,
    avPlayerWard:29,
    avDragonSlained:5
}];

let bluek;
let redk;
let bluew;
let redw;
let bluedr;
let reddr;

const blueTeam=document.getElementById("blueTeam");
const redTeam=document.getElementById("redTeam");


blueTeam.addEventListener("change",()=>{
    var bvalue = Number(blueTeam.value);
    bluek=team[bvalue].avPlayerKda;
    bluew=team[bvalue].avPlayerWard;
    bluedr=team[bvalue].avDragonSlained;
    console.log(bluek);
    console.log(bluew);
    console.log(bluedr);
})

redTeam.addEventListener("change",()=>{
    var rvalue = Number(redTeam.value);
    redk=team[rvalue].avPlayerKda;
    redw=team[rvalue].avPlayerWard;
    reddr=team[rvalue].avDragonSlained;
    console.log(redk);
    console.log(redw);
    console.log(reddr);
})


const boton=document.querySelector(".button")

boton.addEventListener("click",()=>{
    const inputValues = [];
inputValues.push(bluek);
inputValues.push(bluew);
inputValues.push(bluedr);
inputValues.push(redk);
inputValues.push(redw);
inputValues.push(reddr);

var o1 = {
  "input_data": [
    {
      "fields": [
        "bAvPlayerKda",
        "bAvPlayerward",
        "bAvDragonSlained",
        "rAvPlayerKda",
        "rAvPlayerward",
        "rAvDragonSlained"
      ],
      "values": [ inputValues ]
    }
  ]
};

console.log(JSON.stringify(o1));


/*let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// NOTE: you must manually enter your API_KEY below using information retrieved from your IBM Cloud
const API_KEY = "Eqx1Dwl27QKMUbAAeRLzDe2GAgYVVX9-eEFi4pBzVzSl";

function getToken(errorCallback, loadCallback) {
	const req = new XMLHttpRequest();
	req.addEventListener("load", loadCallback);
	req.addEventListener("error", errorCallback);
	req.open("POST", "https://iam.cloud.ibm.com/identity/token");
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.setRequestHeader("Accept", "application/json");
	req.send("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY);
}

function apiPost(scoring_url, token, payload, loadCallback, errorCallback){
	const oReq = new XMLHttpRequest();
	oReq.addEventListener("load", loadCallback);
	oReq.addEventListener("error", errorCallback);
	oReq.open("POST", scoring_url);
	oReq.setRequestHeader("Accept", "application/json");
	oReq.setRequestHeader("Authorization", "Bearer " + token);
	oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	oReq.send(payload);
}

getToken((err) => console.log(err), function () {
	let tokenResponse;
	try {
		tokenResponse = JSON.parse(this.responseText);
	} catch(ex) {
		// TODO: handle parsing exception
	}
	// NOTE: manually define and pass the array(s) of values to be scored in the next line
	const payload = toString(o1);
	;
	const scoring_url = "https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/9951d321-7097-4458-9873-7c727eae7f9f/predictions?version=2022-11-21";
	apiPost(scoring_url, tokenResponse.access_token, payload, function (resp) {
		let parsedPostResponse;
		try {
			parsedPostResponse = JSON.parse(this.responseText);
		} catch (ex) {
			// TODO: handle parsing exception
		}
		console.log("Scoring response");
		console.log(parsedPostResponse);
	}, function (error) {
		console.log(error);
	});
}); */


});
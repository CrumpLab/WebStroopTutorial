//writing functions to create a list of trials


Stroopitems = [["red","red","con"],
["blue","blue","con"],
["green","green","con"],
["green","green","con"],
["red","red","con"],
["blue","blue","con"],
["green","green","con"],
["green","green","con"],
["red","red","con"],
["blue","blue","con"],
["green","green","con"],
["green","green","con"],
["red","blue","inc"],
["red","yellow","inc"],
["red","green","inc"],
["blue","red","inc"],
["blue","yellow","inc"],
["blue","green","inc"],
["green","red","inc"],
["green","yellow","inc"],
["green","blue","inc"],
["yellow","red","inc"],
["yellow","green","inc"],
["yellow","blue","inc"]];

//The variable Stroop items contains 24 trials, 12 congruent and 12 incongruent
//Ultimately, we want a variable like this one to control the experiment
//We could have written a function to generate this variable
//but we will use it as a starting point to generate a complete trial variable
//with more trials (94), and with randomization

//a function to create more trials
//note: an easy way to do this would be to copy and paste the contents of Stroopitems
//several times into itself, extending the length of the variable, this
//is what the following function accomplishes.

function createtrials(input,ntimes) {
	var temparray = new Array(new Array(''));
	iii=-1;
	for (i=0; i<=ntimes-1; i++) {
		for (ii=0; ii<=input.length-1; ii++){
			iii++;
			temparray[iii]=input[ii];
		}
	}
	return temparray;
}

var trials=createtrials(Stroopitems,2); //variable trials will now contain 2 sets of Stroopitems

//In many situations we want to randomize our trials
//we could easily do this by rearranging the indexes of the trial array
//the following function randomizes the indexes of an array

function randomizearray(t){
    var tt= t;
    var n = 0;
    var a = "";
    var b = "";
    var i = 0;
    for (i=0; i <= t.length-1; i++){
        n = Math.floor(Math.random()*t.length);
        a = tt[i];
        b = tt[n];
        tt[i] = b;
        tt[n] = a;    
    }
    return tt;
}

//once our functions are defined, we can create trials and randomize them in one line
var trials=randomizearray(createtrials(Stroopitems,2)); //variable trials will now contain 2 sets of Stroopitems



var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

var BrowserInfo = [];
BrowserInfo[0] = BrowserDetect.browser;
BrowserInfo[1] = BrowserDetect.version;
BrowserInfo[2] = BrowserDetect.OS;

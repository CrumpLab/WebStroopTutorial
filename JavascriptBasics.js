
//declaring variables
var a = 'hello world';  //strings
var b =1;               //numbers  
var c = [2,3,4];        //arrays
var d = ['a',1,4,'test']; //arrays can contain different kinds of variables, strings and numbers
var e  =[['a',1],['b',2],['c',3]]; //arrays can be multidimensional
var f = new Array(''); //arrays can be initialized and set to empty

//running a repeat loop

i=0;
for (i=0; i<=100; i++) {
f[i] = i+100; //sets element i in f to i+100
}

//the first element in an array starts with 0
var g  = c[0]*c[1];

//if then statements
var h = new Array('');
for (i=0; i<=100; i++) {
	if (i<50) {
		h[i] = i+100;
		}
		else if (i>=50 && i < 60) {
		h[i] = i+200;
		}
		else {
		h[i] = i+300;
		}
}

//writing a function
function sumarray(t){
	tempGlobal = 0;
	var tempLocal = 0;
	for (ii=0; ii<=t.length-1; ii++){
		tempGlobal+=t[ii];
		tempLocal+=t[ii];
	}
	return tempLocal;
}

var testit = sumarray(h);



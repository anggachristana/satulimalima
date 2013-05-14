// JavaScript Document

var isiData = new function(){
var http = new XMLHttpRequest();
var coba; 

this.reqData = function(){

	document.addEventListener("deviceready",isiData.onDeviceReady,false);
	var data;
	var target = 'list';	
	http.open('GET','coba.xml');
	http.onreadystatechange =function(data){
	if(http.readyState==4){
		var isi = http.responseXML;
		data = $('spot', isi).get();
		coba = data; 
		document.getElementById(target).innerHTML =coba;
		return data;
		}
	return data;	
	};
	http.send(null);
	this.parseXML (cobalagi);
	var data = this.parseXML(this.coba);
	document.getElementById('list').innerHTML = "angga";
	}
	
	
	
this.handle = function(){
	if(http.readyState==4){
		isi = http.responseXML;
		isiData.coba = isi;
		}	
	}

this.onDeviceReady = function (){
	}
	
this.parseXML =  function (xml) {
       	console.log ("ambil data");
           //Grab every single ITEM tags in the XML file
        data = $('spot', xml).get();
		console.log ("berhasil ambil data " + toString(data));
            //Allow user to toggle display randomly or vice versa
     }
	
}
		

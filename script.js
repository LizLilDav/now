'use strict';
/*Object.prototype.hello="helo,world"
function User (name){
	this.name =name;
	this.age =25;
}
var u1 =new User("john")
for(var i in u1){
	if(u1.hasOwnProperty(i))
	console.log(i +":" +u1[i]);
}
 function Book(title,pubYear,price){
 	this.title=title;
 	this.pubYear=pubYear;
 	this.price=price;
 }

var javascript =new Book("javascript",2002,2500);
Book.prototype.show=function (){
	return this.title +":"+this.price;
}
console.log(javascript.show());*/
//todateString
/*
function getDate(date){
	var reg =/^(\d{4})-(\d{2})-(\d{2})$/;
	if(reg.test(date)){
		var y = date.match(reg);
		var z = new Date(y[1],y[2]-1,y[3]);
		return z
	}
}

var x= getDate("2015-12-24");
console.log(x.toString());
console.log(x.toDateString());

*/
var small = document.getElementsByClassName("small");
console.log(small);
function foo(){var ok=true;
var element=document.getElementsByClassName("small")[0];

		element.style.margin="20px";
}




























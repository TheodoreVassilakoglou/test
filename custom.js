var inpkey = document.getElementById("inpkey");
var inpvalue=document.getElementById("inpvalue");
var inpvalue2=document.getElementById("inpvalue2");
var inpvalue3=document.getElementById("inpvalue3");



var btninsert = document.getElementById("btninsert");
var isoutput = document.getElementById("isoutput");


var key = inpkey.value;
var value = inpvalue.value;
var value2 = inpvalue2.value;
var value3 = inpvalue3.value;

console.log(key);
console.log(value);
console.log(value2);

btninsert.onclick = function(){
  var key = inpkey.value;
  var value = inpvalue.value;
  var value2 = inpvalue2.value;
  var value3 = inpvalue3.value;



if(key && value) {
  var content = value + ', ' + value2 + value3;
    // if the key exists
    if(localStorage.getItem(key)){
        // add this value onto the end of the existing string
        localStorage.setItem(key, content);
    }else{
        // the key doesn't exist yet, add it and the new value
        localStorage.setItem(key, content);
    }
    location.reload();
}
};
for(var i=0; i<localStorage.length; i++){
  var key=localStorage.key(i);
  var value=localStorage.getItem(key);
  isoutput.innerHTML += `${key}: ${value}  <br>` ;
}

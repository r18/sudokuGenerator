var answer = [];

function main(){
    
    console.log("loaded");
    var container = document.getElementById("container");
    var table = document.createElement("table");
    table.setAttribute('width',300);
    table.setAttribute('height',300);
    table.setAttribute('border',1);
    table.setAttribute('bordercolor',"#333333");
    table.setAttribute('cellspacing',0);
    table.setAttribute('cellpadding',5);
    
    var tb = document.createElement("tbody");
    var rows = [];
    for(var i=0;i<3;i++)rows.push(document.createElement("tr"));
    for(var i=0;i<3;i++){
	for(var j=0;j<3;j++){
	    rows[i].appendChild(mkData(genRandomTable().outerHTML));
	}
	tb.appendChild(rows[i]);
    }
    table.appendChild(tb);
    container.appendChild(table);
}

function getElem(x,y){
    container = document.getElementById('container');
    a = container.childNodes[0].childNodes[0].
	childNodes[Math.floor(y/3)].childNodes[Math.floor(x/3)].
	childNodes[0].childNodes[0].childNodes[y%3].childNodes[x%3];
    return a;
}
function getValue(x,y){
    var e =  getElem(x,y);
    e.style.backgroundColor = 'red';
    window.setTimeout(function(){
	e.style.backgroundColor = 'white';
    },1500);
    return e.innerHTML;
}
function setValue(x,y,v){
    getElem(x,y).innerHTML = v;
}
function turnRed(elem){
    elem.style.backgroundColor = 'red';
    window.setTimeout(function(){
	elem.style.backgroundColor = 'white';
    },2000);
}


function genRandomTable(){
    var table = document.createElement("table");
    table.setAttribute('width',100);
    table.setAttribute('height',100);
    table.setAttribute('border',1);
    table.setAttribute('bordercolor',"#333333");
    table.setAttribute('cellspacing',0);
    table.setAttribute('cellpadding',5);

    var tb = document.createElement("tbody");
    var rows = [];
    var r = randomSeq();
    answer.push(r);
    for(var i=0;i<3;i++)rows.push(document.createElement("tr"));
    for(var i=0;i<3;i++){
	for(var j=0;j<3;j++){
	    rows[i].appendChild(mkData(r[i*3+j]));
	}
	tb.appendChild(rows[i]);
    }
    table.appendChild(tb);
    return table;
}

function mkData(text){
    var td = document.createElement("td");
    td.innerHTML = text;
    return td;
}

function randomSeq(){
    s = [1,2,3,4,5,6,7,8,9];
    for(var i=0;i<50;i++){
	s = swap(s,Math.floor(Math.random()*8));
    }
    return s;
}

function swap(a,n){
    a.splice(n,2,a[n+1],a[n]);
    return a;
}

window.onload = main;

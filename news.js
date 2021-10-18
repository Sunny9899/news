let parent=document.getElementById("show");

var news=JSON.parse(localStorage.getItem("activeNews"));

//console.log(news[0]);

function showNews(){
const A=document.createElement("p");
A.textContent="By: "+news[0].aut;

const T=document.createElement("h3");
T.textContent=news[0].titl; 

const C=document.createElement("p");
C.textContent=news[0].cont;

const D=document.createElement("p");
D.textContent=news[0].dat;    

const I=document.createElement("img");
I.src=news[0].imag;
I.setAttribute("class","I");

parent.append(A,D,T,I,C);
}
showNews();
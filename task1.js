// DOM MANIPULATION

let ele=document.getElementById('click');
ele.style.border="3px  solid black";
console.log(ele);

let eleclass=document.getElementsByClassName('create');
console.log(eleclass);

let ele2=document.getElementById("month");
console.log(ele2.innerHTML);
console.log(ele2.innerText);

let ele3=document.getElementById("year");
console.log(ele3.innerHTML);
console.log(ele3.innerText);

let tn=document.getElementsByTagName('label')
console.log(tn);
console.log(tn[0].innerHTML)
console.log(tn[1].innerHTML)
console.log(tn[0].innerText)

// let tn1=document.getElementsByTagName('div')
// console.log(tn1);
// console.log(tn1[0].innerHTML)
// const createdele=document.createElement('p');       
// createdele.textContent="this is a paragraph";       //textcontent
// tn[0].appendChild(createdele);
// console.log(createdele);

let tn2=document.getElementsByClassName('create')
console.log(tn2);
createdelement=document.createElement('p')
createdelement.innertext="this is a new para";    //inner text
tn2[0].appendChild(createdelement);
console.log(createdelement);

// document query selector

sel=document.querySelector('.conditions');
console.log(sel);

sel=document.querySelectorAll('.conditions');
console.log(sel);















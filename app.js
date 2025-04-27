
let url ="http://localhost:3000/izmjere";

let table = document.getElementById("table");
let tbody = document.getElementById("tbody");

window.addEventListener('DOMContentLoaded', ()=>getData());

const getData = async () =>{
    const res = await fetch (url);
    const data = await res.json();
    return data
} 



const displayData = async () =>{

const load = await getData();


let dataDisplay = load.map((object)=>{
const {id, mb_k_opcine, kat_opcina, datum_pocetka, ocekivano_trajanje} = object;

return `<tr><th scope="row">${id}</th>
                              <td>${mb_k_opcine}</td>
                              <td>${kat_opcina}</td>
                              <td>${datum_pocetka}</td>
                              <td>${ocekivano_trajanje}</td></tr>`

}).join("");

tbody.innerHTML = dataDisplay;

}

displayData();



const form = document.querySelector('.form');

form.addEventListener ('submit', (e)=>{
    e.preventDefault();

    // const doc ={
    //     mb_k_opcine:form.mbo.value,
    //     kat_opcina:form.name.value,
    //     datum_pocetka:form.date.value
    // }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const sendData = JSON.stringify(data);
     fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:sendData
     });
     window.location.replace ('/indexx.html');
     


})

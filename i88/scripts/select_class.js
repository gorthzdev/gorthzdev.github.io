
let selected_class = null;
const domSelect = document.querySelector('.select-class');
const domGranjero = document.querySelector('#poster-granjero');
const domRogue = document.querySelector('#poster-rogue');
const domSlasher = document.querySelector('#poster-slasher');
const domVeteran = document.querySelector('#poster-veteran');
const domSelectButton = document.querySelector('.select-this');



domGranjero.addEventListener('click', ()=>{
    selected_class = 'granjero';
    domGranjero.style.border = '0.5rem solid goldenrod'
    domRogue.style.border = 'none'
    domSlasher.style.border = 'none'
    domVeteran.style.border = 'none'
})

domRogue.addEventListener('click', ()=>{
    selected_class = 'rogue';
    domRogue.style.border = '0.5rem solid goldenrod'
    domGranjero.style.border = 'none'
    domSlasher.style.border = 'none'
    domVeteran.style.border = 'none'
})

domSlasher.addEventListener('click', ()=>{
    selected_class = 'slasher';
    domSlasher.style.border = '0.5rem solid goldenrod'
    domGranjero.style.border = 'none'
    domRogue.style.border = 'none'
     domVeteran.style.border = 'none'
})

domVeteran.addEventListener('click', ()=>{
    selected_class = 'veteran';
    domVeteran.style.border = '0.5rem solid goldenrod'
    domGranjero.style.border = 'none'
    domRogue.style.border = 'none'
    domSlasher.style.border = 'none'
})

domSelectButton.addEventListener('click', ()=>{
    localStorage.setItem('player_class' , selected_class)  //locastoragese
   if( selected_class ) domSelectButton.setAttribute('href','level_1.html')
 })

 console.log(domSelectButton)


   


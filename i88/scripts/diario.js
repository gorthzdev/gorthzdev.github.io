const diario = document.querySelector('.diario-styles');
const diario_elements = document.querySelector('.diario-elements');
const info_elements = document.querySelector('.diario-info');
const diario_close = document.querySelector('.diario__closed');
const diario_open = document.getElementById('diario');


//iniciliza los listener una sola vez y las funciones dependen de ellos , no los listener de las funciones
export function initDiario(data) {
    diario_close.addEventListener('click', e => {
        diario.style.display = 'none';
        diario_elements.innerHTML = ''
    });
    diario_open.addEventListener('click', e => {
        diario.style.display = 'grid';
        let data_mobs = getDataMobs();
        if (data_mobs === null ) return;
        renderDiario(data_mobs);

    });
    diario_elements.addEventListener('click' , event=>{
        let data = getDataMobs();
        let mostrar = parseInt(event.target.attributes.data_id.value);
        let obj = data[mostrar];
        info_elements.innerHTML = `
        <p class='info-e-life'>Nombre: ${obj.name}</p>
          <p class='info-e-life'>Vida: ${obj.life}</p>
          <p class='info-e-armor'>Armadura: ${obj.armor}</p>
          <p class='info-e-damage'>Daño: ${obj.damage}</p>
          <p class='info-e-damage'>Critico: ${obj.critical}</p>
          <p class='info-e-damage'>Descripcion</p>
        `

    })
}
function renderDiario(data) {
    console.log(data, 'data')
    let domfrg = document.createDocumentFragment();

    data.forEach(( el,i) => {
        let diario_item = document.createElement('div')
        diario_item.classList.add('diario-element')
        diario_item.setAttribute('data_id', i);

        diario_item.innerHTML = ` 
                <div class="diario-element__img-container" data_id="${i}">
                     <img src="${el.image}" alt="img" data_id="${i}">
                </div>
                <p class="diario-element__name" data_id="${i}">${el.name}</p>
        `
        //diario_elements.appendChild()
        diario_elements.appendChild(diario_item);
    });


}
function getDataMobs(){
      let data_mobs = []
    try {   
        data_mobs = JSON.parse(localStorage.getItem('Mobs'));
        } catch (error) {
            console.log(error);
        }
               return data_mobs
}

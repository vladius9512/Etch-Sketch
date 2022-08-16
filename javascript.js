const container = document.getElementById('container');
let gameType = 'green';

const storeVal = (element) =>{
    gameType = element.value;
}


function makeRows(rows, cols) {
    container.innerHTML = "";
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c=0; c<(rows * cols); c++)
    {
        let cell = document.createElement('div');
        cell.innerText = "";
        container.appendChild(cell).className = 'grid-item';
    };
};

const submit = document.getElementById('submit');

const clickHandler = () =>{
    let values = document.getElementById('quantity').value;
    makeRows(values,values);
}
submit.addEventListener('click', clickHandler);

const valoare = document.getElementById('quantity').value;

makeRows(valoare,valoare);



const hoverHandler = (e) => {

    if(gameType === 'green')
    {
        e.target.style.background = 'green';
    }
    if(gameType === 'random')
    {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        e.target.style.background = color;
    }
    if(gameType === 'grey')
    {
        e.target.style.background = 'grey';
    }
    if(gameType === 'razor')
    {
        e.target.style.background = 'aliceblue';
    }
}


const reload = () => {
    let valoare = document.getElementById('quantity').value;
    makeRows(valoare,valoare);

}


container.addEventListener('mouseover', hoverHandler);
'use strict';

const btn = document.querySelectorAll('.show-modal');

for (let value of btn) {
    value.addEventListener('click', () => {
        document.querySelector('.modal').classList.toggle('hidden');
        document.querySelector('.overlay').classList.toggle('hidden');
    })
    //закрытие по нажатию на крестик
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.toggle('hidden');
        document.querySelector('.overlay').classList.toggle('hidden');

    })
    //закрытие по нажатию вне модального окна
    document.querySelector('.overlay').addEventListener('click', () => {
        document.querySelector('.modal').classList.toggle('hidden');
        document.querySelector('.overlay').classList.toggle('hidden');
    })
};
//закрытие окна клавишей Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.modal').classList.add('hidden');
        document.querySelector('.overlay').classList.add('hidden');
    }
})



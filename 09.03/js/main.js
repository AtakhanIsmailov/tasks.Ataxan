let openBtn = document.querySelector('#open-modal');
let modal = document.querySelector('#modal');


const showNotification = (options) => {
    modal.textContent = options.html;
    modal.classList.add(options.className);
    modal.classList.add('d-block');
    // modal.style.color = '';
    // modal.style.backgroundColor = '';
    // modal.style.borderColor = '';
    // modal.style.borderRadius = "";

    setTimeout(hideNotification, 1500)
}

const hideNotification = () => {
    modal.classList.remove('d-block')
}

openBtn.onclick = () => {
    showNotification({html:'Hello, World', className:'Welcome'});

};


// 1)  Применил эти стили 
// modal.style.backgroundColor = '#cfe2ff';
// modal.style.color = '#084298';
// modal.style.borderColor = '#b6d4fe';
// modal.style.borderRadius = "0.25rem";

// 2)  Применил эти стили 
// modal.style.backgroundColor = '#e2e3e5';
// modal.style.color = '#41464b';
// modal.style.borderColor = '#d3d6d8';
// modal.style.borderRadius = "0.25rem";

// 3)  Применил эти стили 
// modal.style.backgroundColor = '#d1e7dd';
// modal.style.color = '#0f5132';
// modal.style.borderColor = '#badbcc';
// modal.style.borderRadius = "0.25rem";

// 4)  Применил эти стили 
// modal.style.backgroundColor = '#f8d7da';
// modal.style.color = '#842029';
// modal.style.borderColor = '#f5c2c7';
// modal.style.borderRadius = "0.25rem";

// 5)  Применил эти стили 
// modal.style.color = '#664d03';
// modal.style.backgroundColor = '#fff3cd';
// modal.style.borderColor = '#ffecb5';
// modal.style.borderRadius = "0.25rem";

// 6)  Применил эти стили 
// modal.style.color = '#055160';
// modal.style.backgroundColor = '#cff4fc';
// modal.style.borderColor = '#b6effb';
// modal.style.borderRadius = "0.25rem";

// 7)  Применил эти стили 
// modal.style.color = '#636464';
// modal.style.backgroundColor = '#fefefe';
// modal.style.borderColor = '#fdfdfe';
// modal.style.borderRadius = "0.25rem";

// 8)  Применил эти стили 
// modal.style.color = '#141619';
// modal.style.backgroundColor = '#d3d3d4';
// modal.style.borderColor = '#bcbebf';
// modal.style.borderRadius = "0.25rem";
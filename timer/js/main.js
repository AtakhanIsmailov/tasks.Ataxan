const watch = document.querySelector('#watch');
let millisecond = 0;
let timer;

const start = () => {
    watch.classList.remove('pause');
    clearInterval(timer);
    timer = setInterval(() => {
        millisecond += 10;
        let dateTimer = new Date(millisecond);
        watch.innerHTML = 
        ('0' + dateTimer.getUTCHours()).slice(-2) + ':' + 
        ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
        ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    },10 );
};

const pause = () => {
    watch.classList.add('paused');
    clearInterval(timer);
};

const reset = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    millisecond = 0;
    watch.innerHTML = '00:00:00:00';
};

document.addEventListener('click', (e) => {
    const element = e.target;
    if(element.id === 'start') start();
    if(element.id === 'pause') pause();
    if(element.id === 'reset') reset();
});


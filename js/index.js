document.addEventListener('DOMContentLoaded', ()=>{
    // mobile menu variabl
    const menuMobile = document.querySelector('.header__menu_mobile')
    const gamburger = document.querySelector('.gamburger');
    const mobileLink = document.querySelectorAll('.header__item_mobile');

    // video variabl
    const playButton = document.querySelector('.lesson__btn');
    const overlay = document.querySelector('.lesson__overlay');
    const video = document.querySelector('.lesson__video-content');
    const spanPlay = document.querySelector('.lesson__play');


    gamburger.addEventListener('click', ()=>{
        if(gamburger){
            gamburger.classList.toggle('active');
            menuMobile.classList.toggle('active');
        }
    });

    mobileLink.forEach(link => {
        link.addEventListener('click', () => {
            gamburger.classList.remove('active');
            menuMobile.classList.remove('active');
        });
    });

    playButton.addEventListener('click', () => {
        overlay.style.display = 'none'; // Скрываем оверлей
        video.style.display = 'block'; // Показываем видео
        spanPlay.style.display = 'none'; // Скрываем кнопку "play"
        video.play(); // Начинаем воспроизведение
    });

    // scroll
    document.querySelector('#scroll-icon').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#condition').scrollIntoView({ behavior: 'smooth' });
    });
})
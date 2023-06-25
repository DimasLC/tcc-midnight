let aviao = document.getElementById('aviao')


window.addEventListener('scroll', () => {
    let value = window.scrollY

    aviao.style.marginLeft = value * 3. + 'px';
    aviao.style.marginTop = value * -1. + 'px';

});

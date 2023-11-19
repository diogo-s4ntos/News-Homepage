document.getElementById('menu-button').addEventListener('change', () => {
    if(document.getElementById('menu-button').checked)
    {
        document.getElementById('menu').style.transform = 'translatex(0%)';
        document.getElementById('container').style.opacity = '.5';
        document.getElementById('container').style.filter = 'grayscale(.5)';
    }
    else
    {
        document.getElementById('menu').style.transform = 'translatex(100%)';
        document.getElementById('container').style.opacity = '1';
        document.getElementById('container').style.filter = 'grayscale(0)';
    }
});
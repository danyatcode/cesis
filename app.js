document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.toggle-menu').addEventListener('click', function(){
        document.querySelector('.toggle-menu').classList.toggle('active');
        document.querySelector('.navigation').classList.toggle('active')
        document.querySelector('body').classList.toggle('active')
    })
})
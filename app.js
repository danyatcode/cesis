document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.toggle-menu').addEventListener('click', function(){
        document.querySelector('.toggle-menu').classList.toggle('active');
        document.querySelector('.navigation').classList.toggle('active')
        document.querySelector('body').classList.toggle('active')
    })
})
function fixHeader(){
    window.scrollY > 0
    ?document.querySelector('.header').classList.add('fixed')
    :document.querySelector('.header').classList.remove('fixed'); 
}
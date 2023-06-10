var photos=document.querySelectorAll('.little-div img');
var icon1=document.getElementsByClassName('fa-angle-left')[0];
var photo=document.querySelector('.seemdiv img');
var icon2=document.getElementsByClassName('fa-angle-right')[0];
var index=0;

photos.forEach(o=>{
    o.addEventListener('click',function () {
        photo.src=o.src;
        photos.forEach(element=>{
            element.classList.remove('border');
        })
    })
    photos[index].classList.add('border');
})
function sag(y){
    if(index==3){
        index=0;
    }
    else{
        index++;
    }
    photo.src=y.parentElement.nextElementSibling.children[index].src;
    photos.forEach(element=>{
        element.classList.remove('border');
    })
    photos[index].classList.add('border')

}
function sol(t){
    if(index==0){
        index=3;
    }
    else{
        index--;
    }
    photo.src=t.parentElement.nextElementSibling.children[index].src;
    photos.forEach(element=>{
        element.classList.remove('border');
    })
    photos[index].classList.add('border')
}


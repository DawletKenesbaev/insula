const navbarBtn= document.querySelector(".navbar__contact");
const navbarMenu =document.querySelector(".navbar__menu");
const navbarRotate= document.querySelector(".navbar__rotate");
navbarBtn.addEventListener('click',()=> {
    navbarMenu.classList.toggle('active')
    navbarRotate.classList.toggle('active')
})
const form = document.querySelector('.form'),
checkbox = document.querySelector('.checkbox'),
formSection = document.querySelector('.formSection'),
formB = document.querySelector('.formB'),
input = document.querySelectorAll('.input');
form.addEventListener('submit',(e)=>{
    if (input[0].value && input[1].value) {
        e.preventDefault()
        box = document.createElement('div')
        formSection.appendChild(box)
        box.classList.add('alert2')
        smallBox = document.createElement('div')
        smallBox.classList.add('smallBox')
        box.appendChild(smallBox)
        formSection.classList.add('box')
        title = document.createElement('h3')
        smallBox.appendChild(title)
        title.classList.add('title')
        title.textContent = 'Данные успешно отправлены'
        des = document.createElement('p')
        smallBox.appendChild(des)
        des.classList.add('des')
        des.textContent = 'Спасибо за заказ. Мы свяжемся с Вами по электронной почте в течение часа для подтверждения, после чего вышлем ознакомительный выпуск обзора.'
        deleteBtn = document.createElement('button')
        smallBox.appendChild(deleteBtn)
        deleteBtn.classList.add('deleteBtn2')
        deleteBtn.textContent = 'OK'
        deleteBtn.addEventListener('click',()=>{
          formSection.removeChild(box)
        })
        form.reset();
      
    }
    else {
        e.preventDefault()
        box = document.createElement('div')
        formSection.appendChild(box)
        box.classList.add('alert')
        smallBox = document.createElement('div')
        smallBox.classList.add('smallBox')
        box.appendChild(smallBox)
        formSection.classList.add('box')
        title = document.createElement('h3')
        smallBox.appendChild(title)
        title.classList.add('title')
        title.textContent = 'Возникла ошибка. Что можно сделать?'
        des = document.createElement('p')
        smallBox.appendChild(des)
        des.classList.add('des')
        des.textContent = 'Спасибо за заказ. Мы свяжемся с Вами по электронной почте в течение часа для подтверждения, после чего вышлем ознакомительный выпуск обзора.'
        deleteBtn = document.createElement('button')
        smallBox.appendChild(deleteBtn)
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.textContent = 'OK'
        deleteBtn.addEventListener('click',()=>{
          formSection.removeChild(box)
        })

    }



})
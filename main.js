getSel = x => document.querySelector(x)
let f1 = document.forms['f1']
let f2 = document.forms['f2']

// жирність тексту
getSel('#bold').addEventListener('click', function () {
    if (f1.boldBtn.checked == false) {
        getSel('.content').style.fontWeight = 'bold'
    }
    if (f1.boldBtn.checked) {
        getSel('.content').style.fontWeight = 'normal'
    }
})
// курсвність тесту
getSel('#italic').addEventListener('click', function () {
    if (f1.italicBtn.checked == false) {
        getSel('.content').style.fontStyle = 'italic'
    }
    if (f1.italicBtn.checked) {
        getSel('.content').style.fontStyle = 'normal'
    }
})
//підкреслення тексту
getSel('#underline').addEventListener('click', function () {
    if (f1.underlineBtn.checked == false) {
        getSel('.content').style.textDecoration = 'underline'
    }
    if (f1.underlineBtn.checked) {
        getSel('.content').style.textDecoration = 'none'
    }
})
//закреслення тексту
getSel('#lineThrough').addEventListener('click', function () {
    if (f1.lineThroughBtn.checked == false) {
        getSel('.content').style.textDecoration = 'line-through'
    }
    if (f1.lineThroughBtn.checked) {
        getSel('.content').style.textDecoration = 'none'
    }
})
//вирівнювання тексту
getSel('#left').addEventListener('click', function () {
    getSel('.content').style.textAlign = 'left'
})

getSel('#center').addEventListener('click', function () {
    getSel('.content').style.textAlign = 'center'
})

getSel('#right').addEventListener('click', function () {
    getSel('.content').style.textAlign = 'right'
})
// задання типу шрифту
getSel('#fontFamily').onclick = function () {
    let fontFamily = getSel('.family').children;
    for (let i = 0; i < fontFamily.length; i++) {
        fontFamily[i].onclick = function () {
            getSel('.content').style.fontFamily = fontFamily[i].innerText
        }
    }
}

// задання розмір шрифту
getSel('#fontSize').onclick = function () {
    let fontSize = getSel('.size').children;
    for (let i = 0; i < fontSize.length; i++) {
        fontSize[i].onclick = function () {
            getSel('.content').style.fontSize = fontSize[i].innerText
        }
    }
}

//задання кольору для текту
getSel('#palette').addEventListener('click', function () {
    for (i = 0; i < getSel('.allColorText').children.length; i++) {
        getSel('.allColorText').children[i].onclick = function () {
            getSel('.content').style.color = this.className
        }
    }
})

//задання кольору на задній фон
getSel('#colorsBg').addEventListener('click', function () {
    getSel('.allImagesBg').style.display = 'none'
    getSel('.custom-file').style.display = 'none'
    getSel('.allColorBg').style.display = 'flex'
    for (i = 0; i < getSel('.allColorBg').children.length; i++) {
        getSel('.allColorBg').children[i].onclick = function () {
            document.body.style.background = this.className
        }
    }
})
//задання картину на фон
getSel('#imagesBg').addEventListener('click', function () {
    getSel('.allColorBg').style.display = 'none'
    getSel('.custom-file').style.display = 'none'
    getSel('.allImagesBg').style.display = 'flex'
    for (i = 0; i < getSel('.allImagesBg').children.length; i++) {
        getSel('.allImagesBg').children[i].onclick = function () {
            let src = this.getAttribute('src')
            document.body.style.backgroundImage = `url(${src})`
            document.body.style.backgroundSize = '100%'
        }
    }
})
//Зміна фону на картинку з файлу
getSel('#filesBg').addEventListener('click', function () {
    getSel('.allColorBg').style.display = 'none'
    getSel('.allImagesBg').style.display = 'none'
    getSel('.custom-file').style.display = 'block'
    getSel('#customFile').addEventListener('change', function (event) {
        let url = URL.createObjectURL(event.target.files[0]);
        document.body.style.backgroundImage = `url(${url})`;
        document.body.style.backgroundSize = '100%'

    })
})

// Вхід адміна 
getSel('#signIn').addEventListener('click', function () {
    let pass = getSel('#pass').value
    let login = getSel('#login').value
    if (login == 'admin' && pass == '1111') {
        getSel('#signIn').setAttribute('data-dismiss', 'modal');
        getSel('#signInmodal').style.display = 'none'
        f1.code.removeAttribute('disabled')
    }
    else if (pass == '' || login == '') {
        getSel('#login').classList.add('is-invalid')
        getSel('#pass').classList.add('is-invalid')
        getSel('#errSignIn').innerText = "Value is empty"
        getSel('.err').style.display = 'block'
    }
    else {
        getSel('.err').style.display = 'block'
        getSel('#errSignIn').innerText = "Please check your login or password"
    }
})

f1.code.addEventListener('click', function () {
    getSel('main').style.display = 'none'
    f2.style.display = 'block'
    getSel('#area').value = getSel('.content').innerHTML
})


getSel('#save').addEventListener('click', function () {
    getSel('.content').innerHTML = getSel('#area').value
    getSel('main').style.display = 'block'
    f2.style.display = 'none'
})

//Створення таблиці
f2.createTable.addEventListener('click', function () {
    let countTr = f2.countTr.value
    let countTd = f2.countTd.value
    let widthTd = f2.widthTd.value
    let heightTd = f2.heightTd.value
    let widthBorder = f2.widthBorder.value
    let styleBorder = f2.styleBorder.value
    let colorBorder = f2.colorBorder.value
    let table = document.createElement('table')
    let res = 7
    //Перевірка інпутів на валідність
    if (isNaN(countTr) || countTr == '') {
        f2.countTr.classList.add('is-invalid')
        f2.countTr.classList.remove('is-valid')
        res--
    }
    else if (countTr) {
        f2.countTr.classList.add('is-valid')
        f2.countTr.classList.remove('is-invalid')
    }
    if (isNaN(countTd) || countTd == '') {
        f2.countTd.classList.add('is-invalid')
        f2.countTd.classList.remove('is-valid')
        res--
    }
    else if (countTd) {
        f2.countTd.classList.add('is-valid')
        f2.countTd.classList.remove('is-invalid')
    }
    if (isNaN(widthTd) || widthTd == '') {
        f2.widthTd.classList.add('is-invalid')
        f2.widthTd.classList.remove('is-valid')
        res--
    }
    else if (widthTd) {
        f2.widthTd.classList.add('is-valid')
        f2.widthTd.classList.remove('is-invalid')
    }
    if (isNaN(heightTd) || heightTd == '') {
        f2.heightTd.classList.add('is-invalid')
        f2.heightTd.classList.remove('is-valid')
        res--
    }
    else if (heightTd) {
        f2.heightTd.classList.add('is-valid')
        f2.heightTd.classList.remove('is-invalid')
    }
    if (isNaN(widthBorder) || widthBorder == '') {
        f2.widthBorder.classList.add('is-invalid')
        f2.widthBorder.classList.remove('is-valid')
        res--
    }
    else if (widthBorder) {
        f2.widthBorder.classList.add('is-valid')
        f2.widthBorder.classList.remove('is-invalid')
    }

    if (styleBorder == 'Choose style') {
        f2.styleBorder.classList.add('is-invalid')
        f2.styleBorder.classList.remove('is-valid')
        res--
    }
    else if (styleBorder) {
        f2.styleBorder.classList.add('is-valid')
        f2.styleBorder.classList.remove('is-invalid')
    }
    if (colorBorder == 'Choose color') {
        f2.colorBorder.classList.add('is-invalid')
        f2.colorBorder.classList.remove('is-valid')
        res--
    }
    else if (colorBorder) {
        f2.colorBorder.classList.add('is-valid')
        f2.colorBorder.classList.remove('is-invalid')
    }
    if (res == 7) {
        for (i = 0; i < countTr; i++) {
            let tr = document.createElement('tr')
            table.appendChild(tr)
            for (j = 0; j < countTd; j++) {
                let td = document.createElement('td')
                td.style.width = widthTd
                td.style.height = heightTd
                td.style.borderWidth = widthBorder
                td.style.borderStyle = styleBorder
                td.style.borderColor = colorBorder
                td.innerText = 'TD'
                tr.appendChild(td)
            }
        }
        let reserv = document.createElement('div')
        reserv.appendChild(table)
        f2.area.value += reserv.innerHTML
        getSel('#errTable').style.display = 'none'
    }
    else getSel('#errTable').style.display = 'block'
})
//Оновлення інпутів для таблиці
f2.resetTable.addEventListener('click', function () {
    f2.countTr.value = ''
    f2.countTd.value = ''
    widthTd.value = ''
    f2.heightTd.value = ''
    f2.widthBorder.value = ''
    f2.styleBorder.value = 'Choose style'
    f2.colorBorder.value = 'Choose color'
})
// Створення нумерованого списку
f2.createOl.addEventListener('click', function(){
    let resOl = 2
    let typeOl = f2.typeOl.value
    let countLiOl = f2.countLiOl.value
    if (isNaN(countLiOl) || countLiOl == '') {
        f2.countLiOl.classList.add('is-invalid')
        f2.countLiOl.classList.remove('is-valid')
        resOl--
    }
    else if (countLiOl) {
        f2.countLiOl.classList.add('is-valid')
        f2.countLiOl.classList.remove('is-invalid')
    }

    if (typeOl == 'Choose Ol type mark') {
        f2.typeOl.classList.add('is-invalid')
        f2.typeOl.classList.remove('is-valid')
        resOl--
    }
    else if (typeOl) {
        f2.typeOl.classList.add('is-valid')
        f2.typeOl.classList.remove('is-invalid')
    }

    if(resOl == 2){
        let ol = document.createElement('ol')
        for(i=0;i<countLiOl;i++){
            let li = document.createElement('li')
            li.style.listStyle = typeOl
            li.innerText = 'some text'
            ol.appendChild(li)
        }
        let reserveOl = document.createElement('div')
        reserveOl.appendChild(ol)
        f2.area.value +=reserveOl.innerHTML
    }
})
// Створення не нумерованого списку
f2.createUl.addEventListener('click', function(){
    let resUl = 2
    let typeUl = f2.typeUl.value
    let countLiUl = f2.countLiUl.value
    if (isNaN(countLiUl) || countLiUl == '') {
        f2.countLiUl.classList.add('is-invalid')
        f2.countLiUl.classList.remove('is-valid')
        resUl--
    }
    else if (countLiUl) {
        f2.countLiUl.classList.add('is-valid')
        f2.countLiUl.classList.remove('is-invalid')
    }

    if (typeUl == 'Choose Ul type mark') {
        f2.typeUl.classList.add('is-invalid')
        f2.typeUl.classList.remove('is-valid')
        resUl--
    }
    else if (typeUl) {
        f2.typeUl.classList.add('is-valid')
        f2.typeUl.classList.remove('is-invalid')
    }

    if(resUl == 2){
        let ul = document.createElement('ul')
        for(i=0;i<countLiUl;i++){
            let liUl = document.createElement('li')
            liUl.style.listStyle = typeUl
            liUl.innerText = 'some text'
            ul.appendChild(liUl)
        }
        let reserveUl = document.createElement('div')
        reserveUl.appendChild(ul)
        f2.area.value +=reserveUl.innerHTML
    }
})

// JSONP

let newData = document.createElement('script');
newData.src='data.js';
document.body.append(newData);

window.___assortmentData = function(data) {
    console.log(data);
}

// JSON

// XMLHttpRequest

let xhr = new XMLHttpRequest();

xhr.open("GET", 'data.json');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {

    let data = xhr.response;
    console.log('new');
    console.log(data);
}

//img

let xhrImg = new XMLHttpRequest();

xhrImg.open("GET", '3224.jpg');
// xhrImg.responseType = 'image';
xhrImg.send();

xhrImg.onload = function() {

    let data = xhrImgxhr.response;
    document.body.style.backgroundImage = data;
}

//дз Задача: получить данные из текстового файла text.txt и вывести их на страницу




// FormData

let form = document.querySelector('.feedback');

form.addEventListener('submit', function (evt) {
    
    evt.preventDefault();
    let formData = new FormData(form);
    console.log(formData);

    var request = new XMLHttpRequest();
    request.open("POST", 'main.php');
    request.send(formData);


});



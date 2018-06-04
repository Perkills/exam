function Servicess(){
    var paragraph = document.getElementById("cursor");
   paragraph.style.display = "none";
document.getElementById("hideMe").style.display = "block";

    }

function Transfer(){
    if (document.documentElement.clientWidth >= 1250){
        location.href ="about2.html";
    }
    else
      location.href = "about.html"; 
     
}

function showMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// for the index page

window.addEventListener('load', start);

let template_index = document.querySelector("#index1").content;
let daddy_index = document.querySelector("#index");
function start(){
  fetch("http://www.irinaspac.com/wp-json/wp/v2/index/")
    .then(e=>e.json())
    .then(pick)
}

function pick(data){
  data.forEach(showOneArticle);
}

function showOneArticle(article){
    console.log(article);
  let clone = template_index.cloneNode(true);
  clone.querySelector(".articleheader").textContent=article.title.rendered;
  clone.querySelector('div').textContent=article.acf.logo.url;
  clone.querySelector('.logo-image').src = article.acf.logo.url;
  clone.querySelector('.bg-image').src=article.acf.background.url;    
  daddy_index.appendChild(clone)
}


// for the about page
let template_about = document.querySelector("#about1").content;
let daddy_about = document.querySelector("#about");
function start1(){
    //https://irinaspac.com/wp-json/wp/v2/posts
  fetch("http://www.irinaspac.com/wp-json/wp/v2/about/")
    .then(e=>e.json())
    .then(select)
}

function select(data){
    console.log(data);
  data.forEach(showOneArticle);
}

function showOneArticle(article){
    console.log(article);
    let template_about = document.querySelector("#about1").content;
  let clone = template_about.cloneNode(true);
  clone.querySelector(".articleheader1").textContent=article.title.rendered;
  clone.querySelector('div').textContent=article.acf.instagram;
  clone.querySelector('p1').innerHTML= article.content.rendered;
  clone.querySelector('p2').innerHTML= article.content.rendered;
  clone.querySelector('p3').innerHTML=article.content.rendered; 
 daddy_about.appendChild(clone)
}


//for the services page

let template_services = document.querySelector("#services1").content;
let daddy_services = document.querySelector("#services");
function start2(){
  fetch("http://www.irinaspac.com/wp-json/wp/v2/services/")
    .then(e=>e.json())
    .then(take)
}

function take(data){
   console.log(data);
  data.forEach(showOneArticle);
}

function showOneArticle(article){
    console.log(article);
  let clone = template.cloneNode(true);
  clone.querySelector(".articleheader2").textContent=article.title.rendered;
  clone.querySelector('div').textContent=article.acf.instagram;
  clone.querySelector('title').innerHTML= article.content.rendered;
  clone.querySelector('subtitle').innerHTML= article.content.rendered; 
  clone.querySelector('ph1').innerHTML= article.content.rendered; 
  clone.querySelector('subtitle1').innerHTML= article.content.rendered;
  clone.querySelector('ph2').innerHTML= article.content.rendered;
  clone.querySelector('subtitle2').innerHTML= article.content.rendered;
  clone.querySelector('ph3').innerHTML= article.content.rendered;
  clone.querySelector('ph4').innerHTML= article.content.rendered; 
  daddy_services.appendChild(clone)
}


//for the gallery page

let template_gallery = document.querySelector("#gallery1").content;
let daddy_gallery = document.querySelector("#gallery");
function start3(){
  fetch("http://www.irinaspac.com/wp-json/wp/v2/gallery/")
    .then(e=>e.json())
    .then(put)
}

function put(data){
    console.log(data);
  data.forEach(showOneArticle);
}

function showOneArticle(article){
    console.log(article);
  let clone = template.cloneNode(true);
  clone.querySelector(".articleheader3").textContent=article.title.rendered;
  clone.querySelector('div').textContent=article.acf.instagram;
    
  daddy_gallery.appendChild(clone)
}



////for the contact page

let template_contact = document.querySelector("#contact1").content;
let daddy_contact = document.querySelector("#contact");
function start4(){
  fetch("http://www.irinaspac.com/wp-json/wp/v2/contact/")
    .then(e=>e.json())
    .then(write)
}

function write(data){
    console.log(data);
  data.forEach(showOneArticle);
}

function showOneArticle(article){
    console.log(article);
  let clone = template.cloneNode(true);
  clone.querySelector(".articleheader4").textContent=article.title.rendered;
  clone.querySelector('div').textContent=article.acf.instagram;
  clone.querySelector('img').src = article.acf.insta.url;
  clone.querySelector('insta').innerHTML= article.content.rendered;
  clone.querySelector('img').src = article.acf.face.url;
  clone.querySelector('face').innerHTML= article.content.rendered; 
  clone.querySelector('img').src = article.acf.phone.url;
  clone.querySelector('phone').innerHTML= article.content.rendered; 
  clone.querySelector('img').src = article.acf.mail.url;
  clone.querySelector('email').innerHTML= article.content.rendered; 
  daddy_contact.appendChild(clone)
}









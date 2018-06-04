window.addEventListener('load', galeryJson);

let template_about = document.querySelector("#gallery-page").content;
let fixStuff = document.querySelector("#gallery-container");
function galeryJson(){
    //https://irinaspac.com/wp-json/wp/v2/posts   
  fetch("http://www.irinaspac.com/wp-json/wp/v2/gallery/"  )
    .then(e=>e.json())
    .then(galeryStuff)
}

function galeryStuff(data){
    console.log(data);
  data.forEach(galeryContent);
}

function galeryContent(article){
    console.log(article);
    let template_varName = document.querySelector("#gallery-page").content;
  let clone = template_varName.cloneNode(true);
    clone.querySelector(".gallery-logo").src = article.acf.logo.url;
    clone.querySelector(".gallery-h1").textContent= article.acf.title;
    clone.querySelector(".gallery-h2").textContent= article.acf.headline1;
    clone.querySelector(".pic1").src=article.acf.pic1.url;
    clone.querySelector(".pic2").src=article.acf.pic2.url;
    clone.querySelector(".pic3").src=article.acf.pic3.url;
    clone.querySelector(".pic4").src=article.acf.pic4.url;
    clone.querySelector(".pic5").src=article.acf.pic5.url;
    clone.querySelector(".gallery-h3").textContent= article.acf.headline2;
    clone.querySelector(".por1").src=article.acf.portrait1.url;
    clone.querySelector(".por2").src=article.acf.portrait2.url;
    clone.querySelector(".por3").src=article.acf.portrait3.url;
    clone.querySelector(".por4").src=article.acf.portrait4.url;
    clone.querySelector(".gallery-h4").textContent=article.acf.headline3;
    clone.querySelector(".dr1").src=article.acf.drawing1.url;
    clone.querySelector(".dr2").src=article.acf.drawing2.url;
    clone.querySelector(".dr3").src=article.acf.drawing3.url;
    clone.querySelector(".dr4").src=article.acf.drawing4.url;
    clone.querySelector(".dr5").src=article.acf.drawing5.url;    
    clone.querySelector(".gallery-button").src= article.acf.button.url;

  fixStuff.appendChild(clone)
}

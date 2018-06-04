window.addEventListener('load', start2);

let template_about = document.querySelector("#services-page").content;
let daddy_services = document.querySelector("#services-container");


function start2(){  
  fetch("http://www.irinaspac.com/wp-json/wp/v2/offer/"  )
    .then(e=>e.json())
    .then(pick)
}

function pick(data){
    console.log(data);
  data.forEach(showOneArticle);
}

function showOneArticle(article){
    let template_services = document.querySelector("#services-page").content;
  let clone = template_services.cloneNode(true);
    
  clone.querySelector(".services-logo").src=article.acf.logo.url;
  clone.querySelector(".services-title").textContent= article.acf.title;
  clone.querySelector(".services-headline1").textContent= article.acf.headline1;
  clone.querySelector(".services-p1").textContent= article.acf.paragraph1;
  clone.querySelector(".services-headline2").textContent= article.acf.headline2;
  clone.querySelector(".services-p2").textContent= article.acf.paragraph2;
  clone.querySelector(".services-headline3").textContent= article.acf.headline3;
  clone.querySelector(".services-p3").textContent= article.acf.paragraph3;
  clone.querySelector(".services-p4").textContent= article.acf.paragraph4;
  clone.querySelector(".services-button").src= article.acf.button.url;
 daddy_services.appendChild(clone)
}

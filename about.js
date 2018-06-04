window.addEventListener('load', start1);

let template_about = document.querySelector("#about-page").content;
let daddy_about = document.querySelector("#about-container");
function start1(){
    //https://irinaspac.com/wp-json/wp/v2/posts
  fetch("http://www.irinaspac.com/wp-json/wp/v2/aboutus/")
    .then(e=>e.json())
    .then(select)
}

function select(data){
    console.log(data);
  data.forEach(showOneArticle);
}

function showOneArticle(article){
    console.log(article);
    console.log(article.acf);
        console.log(article.acf.headline);

    let template_about = document.querySelector("#about-page").content;
  let clone = template_about.cloneNode(true);
  clone.querySelector('.about-logo').src=article.acf.logo.url;
  clone.querySelector(".about-h").textContent= article.acf.headline;
  clone.querySelector(".about-p1").textContent= article.acf.paragraph1;
  clone.querySelector(".about-p2").textContent= article.acf.paragraph2;
  clone.querySelector(".about-p3").textContent= article.acf.paragraph3;
  clone.querySelector('.about-button').src=article.acf.button.url;
 daddy_about.appendChild(clone)
}






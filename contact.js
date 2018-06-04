window.addEventListener('load', startContact);

let template_about = document.querySelector("#contact-page").content;
let draw = document.querySelector("#contact-contact");
function startContact(){
    //https://irinaspac.com/wp-json/wp/v2/posts   
  fetch("http://www.irinaspac.com/wp-json/wp/v2/contact/"  )
    .then(e=>e.json())
    .then(take)
}

function take(data){
    console.log(data);
  data.forEach(showOneArticle);
}

function showOneArticle(article){
    console.log(article);
    let template_varName = document.querySelector("#contact-page").content;
  let clone = template_about.cloneNode(true);
  clone.querySelector(".contact-logo").src=article.acf.logo.url;
    clone.querySelector(".instagram-contact-logo").src = article.acf.instagram_logo.url;
    clone.querySelector(".instagram-contact-title").textContent = article.acf.instagram;
    clone.querySelector(".facebook-contact-logo").src = article.acf.facebook_logo.url; 
    clone.querySelector(".facebook-contact-title").textContent= article.acf.facebook;
    clone.querySelector(".phone-contact-logo").src = article.acf.phone_logo.url; 
    clone.querySelector(".phone-contact-title").textContent= article.acf.phone;
    clone.querySelector(".email-contact-logo").src = article.acf.email_logo.url; 
    clone.querySelector(".email-contact-title").textContent= article.acf.email;
    //clone.querySelector('.index-button').src=article.acf.button.url;  
    
 draw.appendChild(clone)
}

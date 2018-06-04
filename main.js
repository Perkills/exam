 //for the index page

window.addEventListener('load', start);

        let template = document.querySelector("#index-page").content;
        let daddy = document.querySelector("#index-container");
        function start(){
        fetch("http://www.irinaspac.com/wp-json/wp/v2/index/")
            .then(e=>e.json())
            .then(gotData)
        }

        function gotData(data){
        data.forEach(ShowFrontPage);
        }

        function ShowFrontPage(article){
        console.log(article);
        console.log(article.acf.motto);
        let template_index = document.querySelector("#index-page").content;
        let clone = template_index.cloneNode(true);
        clone.querySelector('.index-logo').src=article.acf.logo.url;
        clone.querySelector('.index-img').src=article.acf.background.url;
        clone.querySelector('.index-desc').textContent=article.acf.motto;
        clone.querySelector('.index-button').src=article.acf.button.url;
        daddy.appendChild(clone)
        }
    



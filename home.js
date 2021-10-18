let mainparent=document.getElementById("brNews");
let parent=document.getElementById("contain");

        async function headlines(){
        
        let res  = await fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=7a82c3d49692448093e8a99fb6844bd0');
        let data= await res.json();
        console.log(data.articles);
        show(data.articles);
        }
        
        headlines();
  
        function show(el){
            el.forEach((e)=>{

            let T=document.createElement("h3");
            T.textContent=e.title;
            T.onclick= function(){
                store(e);
                window.location.href="news.html";
            }

            let A=document.createElement("div");
            A.textContent=e.author;

            let dash=document.createElement("div");
            dash.textContent="-----------------------";

            parent.append(T,A,dash);
        })
        mainparent.append(parent);
        }



        function store(elmnt){
         
            localStorage.setItem("activeNews",JSON.stringify([]));
            var news =JSON.parse(localStorage.getItem("activeNews"));

            let obj={
                 titl:elmnt.title,
                 imag:elmnt.urlToImage,
                 aut:elmnt.author,
                 cont:elmnt.content,
                 des:elmnt.descriptipn,
                 dat:elmnt.publishedAt,
            }
            news.push(obj);
            (localStorage.setItem("activeNews",JSON.stringify(news)));
        }


  
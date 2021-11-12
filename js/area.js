// function
  let btn = document.getElementsByClassName('area_btn');
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
      let artc = document.getElementsByTagName('article');
      // console.log(artc);
      if(artc[i].getAttribute("class") === btn[i + 1].getAttribute("id")){
        (artc[i].parentElement.querySelectorAll("article")).forEach(function(item, i){
          item.classList.remove("-on");
        });
        artc[i].classList.toggle("-on");
      }else{
        artc[i].classList.toggle("-on");
      }
    })
  }

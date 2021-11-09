// function
  let btn = document.getElementsByTagName('button');
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
      let artc = document.getElementsByTagName('article');
      // console.log(artc);
      // (artc[i].parentElement.querySelectorAll("article")).forEach(function(item, i){
      //   item.classList.remove("-on");
      // });
      if(artc[i].getAttribute("class") === btn[i].getAttribute("id")){
        artc[i].classList.add("-on");
      }else{
        artc[i].classList.remove("-on");
      }
    })
  }

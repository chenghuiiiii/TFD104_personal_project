// function
  let btn = document.getElementsByTagName('button');
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
      let artc = document.getElementsByTagName('article');
      // console.log(artc);
      if(artc[i].getAttribute("class") != "-on"){
        artc[i].classList.add("-on");
      }else{
        artc[i].classList.remove("-on");
      }
    })
  }

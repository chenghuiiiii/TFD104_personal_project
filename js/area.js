// function
  let btn = document.getElementsByClassName('area_btn');
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
      let artc = document.getElementsByTagName('article');
      // console.log(artc);
      if(artc[i].getAttribute("class") === btn[i].getAttribute("id")){
        (artc[i].parentElement.querySelectorAll("article")).forEach(function(item, i){
          item.classList.remove("-on");
        });
        artc[i].classList.toggle("-on");
      }else{
        artc[i].classList.toggle("-on");
      }
    })
  }

  let close_el = document.getElementsByClassName('close_el');
for(let i = 0; i < close_el.length; i++){
  close_el[i].addEventListener("click", function(){
    let artc = document.getElementsByTagName('article');
    artc[i].classList.remove("-on");
  })
}

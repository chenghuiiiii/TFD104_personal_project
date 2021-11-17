let check_btn = document.getElementById('check_list_btn');
console.log(check_btn);
check_btn.addEventListener('click', function(){
  let check_el = document.getElementsByClassName('choice')[0];
  check_el.classList.toggle('-open');
});

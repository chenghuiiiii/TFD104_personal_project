// $(document).ready(function(){
//   $('.spot_list').slick({
//     setting-name: setting-value
//   });
// });
//
// $(document).ready(function(){
//   $('.must_see_list').slick({
//     setting-name: setting-value
//   });
// });

$('.must_see_list').slick();

$('.spot_list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

// $(button).click(function() {
//     $(this).css('background', '#black');
// )};

// var index = 0;
// var colors = [ "#333333"];
// var colors2 = ["#e6e6e4"]
// var max = colors.length;
// var max = colors2.length;
//
// var timerId;
//
// function start(){
//     timerId = setInterval(changeColor, 1000);
// }
//
// function changeColor(){
//         if( index != max){
//             console.log( index);
//             document.body.style.backgroundColor = colors[ index];
//             index++;
//         }
//         else{
//             clearInterval( timerId);
//         }
// }
//
// function end(){
//     timerId = setInterval(changeColor, 1000);
// }
//
// function changeColor(){
//         if( index != max){
//             console.log( index);
//             document.body.style.backgroundColor = colors2[ index];
//             index++;
//         }
//         else{
//             clearInterval( timerId);
//         }
// }

function start(){
  document.body.style.backgroundColor = "#333333"
  document.getElementById("Ocolor").style.color = "#ffffff"
  document.getElementById("Dcolor").style.color = "#ffffff"
  document.getElementById("Ccolor").style.color = "#ffffff"
  document.getElementById("Fcolor").style.color = "#ffffff"
  document.getElementById("Ucolor").style.color = "#ffffff"
  document.getElementById("Ecolor").style.borderColor="#ffffff"
  document.getElementById("type").value = "professor"
}

function end(){
  document.body.style.backgroundColor = "#e6e6e4"
  document.getElementById("Ocolor").style.color = "black"
  document.getElementById("Dcolor").style.color = "black"
  document.getElementById("Ccolor").style.color = "black"
  document.getElementById("Fcolor").style.color = "black"
  document.getElementById("Ucolor").style.color = "black"
  document.getElementById("Ecolor").style.borderColor="black"
  document.getElementById("type").value = "word"
}

// $(document).ready(function() {
// 	$(".loading").lettering();
// });

// function javascript(){
//
//     document.getElementById("testDiv").style.backgroundColor = "#000000";  //RGB코드
// }
//
//
// var menu_flag = true;
// var ram_flag = true;
//
//
//
// $("#menu").click(function(){
//
//  if (menu_flag) {
//
//    $("#container").animate({"left": "+=30px"}, "slow");
//
//  menu_flag = false;
//
//  } else {
//
//  $("#container").animate({"left": "-=30px"}, "slow");
//
//        menu_flag = true;
//
//  }
//
// });
//
// $("#ram").click(function(){
//
//  if (ram_flag) {
//
//    $("#container").animate({"left": "-=30px"}, "slow");
//
//  ram_flag = false;
//
//  } else {
//
//  $("#container").animate({"left": "+=30px"}, "slow");
//
//        ram_flag = true;
//
//  }
//
// });

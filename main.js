let bodyButton = document.getElementById('btn1');

btn1.addEventListener('click', function () {
  let colorsArray = [];
  String1 = 'red';
  String2 = 'black';
  String3 = 'white';
  String4 = 'red';
  alternateBackgroundColor(colorsArray);
});

function alternateBackgroundColor(colorsArr) {
  let bodyBackgroundColor = document.body.style.backgroundColor;
  let bodyHeaderColor = document.getElementById('header1').style.color;
  switch (bodyBackgroundColor) {
    case "String1":
      bodyBackgroundColor = "String3";
      break;
    case "String2":
      bodyBackgroundColor = "String1";
      break;
    case "String3":
      bodyBackgroundColor = "String2";
      bodyHeaderColor = "String3";
      break;
    default:
      bodyBackgroundColor = "String4";
  }
}
/* 
   String1 = 'red';
   String2 = 'black';
   String3 = 'white';
   String4 = 'red';
*/
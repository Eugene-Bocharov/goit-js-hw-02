'use strict';

const formatString = function (string) {
    let msgarr = string.split('');

    if(msgarr .length >= 40){
     console.log(msgarr );
    }
    else{
      while(msgarr .length < 40){
        msgarr .pop();
      }
    }
    
  };
  
formatString();

//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // повернеться оригінальний рядок
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // повернеться форматований рядок
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // повернеться оригінальний рядок
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   // повернеться форматований рядок
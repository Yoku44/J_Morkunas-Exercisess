//const book = {
 // name: 'Dievu miskas',
 // author: 'Balys Sruoga',
 // page: '270',
 // getFullName: function(){
//console.log(this.name + '' + this.author + this.page);
 // }
//};

 //book.getFullName();

 const zmogus ={
  vardas: 'Jokubas',
  pavarde: 'Morkunas',
  miestas: 'Vilnius',
 }
 function printobject(zmogus){
  for (let key in zmogus){
    console.log (key + ':'+ zmogus[key]);
  }
 }
 printobject(zmogus)
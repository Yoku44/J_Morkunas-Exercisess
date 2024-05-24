const student = {
  name: 'Jokubas',
  lastName: 'Morkunas',
  age: '100',
  getFullName: function(){
console.log(this.name + '' + this.lastName + this.adress);
  }
};
 student.adress = 'Vilnius';
 student.getFullName();
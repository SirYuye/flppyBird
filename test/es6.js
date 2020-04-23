/**
 * @author hayho
 */

 class Animal {
   constructor(name = '无', age = 0) {
     this.name = name;
     this.age = age;
   }

   say() {
     console.log(this.name + ':' + this.age)
   }
 }

 class Cat extends Animal {
  constructor(name, age){
    super(name, age);
  }

  say() {
    super.say();
    console.log('子类' + this.name + ':' + this.age)
  }
 }

 const cat = new Cat('小猫', 5);
 cat.say();

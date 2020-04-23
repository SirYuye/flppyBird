/**
 * @author hayho
 */

 (function() {
   var Animal = function(name, age) {
     this.name = name;
     this.age = age;
   };
   Animal.prototype.say = function() {
    console.log(this.name + ' ' + this.age)
  };
  //  var cat = new Animal('小猫', 4);
  //  cat.say();

  // call() apply()
  // 调用一个对象的一个方法，用另一个对象替换当前对象

  // Animal.prototype.say.call(cat)
  // var params = { name: '大猫', age: 8 }
  // cat.say.call(params)

  // 寄生组合继承
  var Cat = function (name, age) {
    Animal.call(this, ...arguments);
  };

  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.say = function() {
    var p = {
      name: '父类名字',
      age: 10
    }
    Animal.prototype.say.apply(p);
    console.log('这是子类的名字:' + this.name)
  }
  var cat1 = new Cat('子猫', 2);
  cat1.say();
 })()

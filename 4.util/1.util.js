var util=require('util');

function  Parent() {
    this.name='parent';
}
Parent.prototype.say=function () {
    console.log(this.name);
}
function Child() {
    this.name='child'
}
//子类可以继承父类原型上的方法
util.inherits(Child,Parent);//子类继承父类
var child=new Child();
child.say();
console.log(util.inspect(child));//对象转换为字符串
util.isArray()//是不是数组
util.isRegExp()//是不是正则
util.isDate()//是不是日期
util.isError()//是不是错误
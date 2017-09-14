// console.log(global);

console.warn('warn');
console.time('cost');
for(var i=0;i<10000;i++){

}
console.timeEnd('cost');//计时器使用的总时间

console.log(__dirname);//当前模块的文件绝对路劲
console.log(__filename);//当前模块的所在的目录的绝对路劲
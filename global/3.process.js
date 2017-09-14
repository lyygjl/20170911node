
console.log(process.cwd());//当前模块的所在目录
//切换到上级工作目录
process.chdir('..')
console.log(process.cwd());
console.log(process.memoryUsage());
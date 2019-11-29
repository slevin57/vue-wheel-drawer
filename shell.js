var shell = require("shelljs");

//执行npm run build 命令
if (shell.exec('npm run build').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
}

// 打包后的文件从dist目录复制到docs目录
// docs目录必须存在，另外如果docs目录内有同名文件会直接覆盖掉
shell.cp('-r', './dist/*', './docs');


shell.exec('git add .');
shell.exec("git commit -m 'autocommit'")
shell.exec('git push')
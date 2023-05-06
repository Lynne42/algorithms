function forLoop() {
    // 创建一个大型数组
    const arr = Array(100).fill(0);

    // 使用 for 循环遍历数组，并监测内存使用情况
    console.log('Before for loop:', process.memoryUsage().heapUsed / 1024 / 1024);

    for (let i = 0; i < arr.length; i++) {
        // 在此处执行相应的操作，如访问数组元素
        console.log('looping:', process.memoryUsage().heapUsed / 1024 / 1024);
    }

    console.log('After for loop:', process.memoryUsage().heapUsed / 1024 / 1024);

}

// for循环
forLoop()
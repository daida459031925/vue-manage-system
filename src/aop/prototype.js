//在vue中可以使用then 那回调执行
Function.prototype.before = function (beforefn) {
    console.log("**************")
    let _self = this;//保存原函数引用
    return function () { //返回包含了原函数和新函数的"代理函数"
        // 执行新函数，且保证 this 不被劫持，新函数接受的参数
        // 也会被原封不动地传入原函数，新函数在原函数之前执行
        beforefn.apply(this, arguments);//执行新函数，修正this
        // 执行原函数并返回原函数的执行结果，
        // 并且保证 this 不被劫持
        return _self.apply(this, arguments);//执行原函数
    };
};
Function.prototype.after = function (afterfn) {
    console.log("**************")
    let _self = this;
    return function () {
        let ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    };
};
Function.prototype.around = function (beforefn, afterfn) {
    console.log("**************")
    let _self = this;
    return function () {
        beforefn.apply(this, arguments);
        let ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    };
};

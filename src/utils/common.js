const Utils = {
    //判断是否数据为对象
    isObject:(obj) => !Utils.isArray(obj) && obj instanceof Object,
    objectLength : (obj) => Utils.isObject(obj) ? Object.keys(obj).length : 0,
    isEmpty : (obj) => Utils.isNull(obj)  || Utils.isUndefined(obj) || obj == "",
    isNull : (obj) => obj == null,
    isUndefined : (obj) => obj == undefined,
    isArray : (obj) => obj instanceof Array,
    //深度拷贝
    deepCopy : (newobj,oldobj) => {
        for(var k in oldobj){
            //判断我们的属性值属于哪种类型
            //1.获取属性值
            var item = oldobj[k];
            if(item instanceof Array){
                //2.判断这个值是否是数组
                newobj[k] = [];
                Utils.deepCopy(newobj[k],item);
            }else if(item instanceof Object){
                //3.判断这个值是否是对象
                newobj[k] = {};
                Utils.deepCopy(newobj[k],item);
            }else{
                //4.属于普通数据类型
                newobj[k] = item;
            }
        }
    },
    //基于深度复制原理来进行深度赋值
    deepValue : (thisobj,newobj) => {
        for(var k in newobj){
            var thisob = thisobj[k];
            if(!Utils.isEmpty(thisob)){
                return;
            }
            var item = newobj[k];
            if(item instanceof Array){
                //2.判断这个值是否是数组
                thisobj[k] = item;
            }else if(item instanceof Object){
                //3.判断这个值是否是对象
                Utils.deepCopy(thisobj[k],item);
            }else{
                //4.属于普通数据类型
                thisobj[k] = item;
            }
        }
    }
}

export default Utils;


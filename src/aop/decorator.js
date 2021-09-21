export const before = function (...args) {
    console.log("**************")
    return function (target, key, descriptor) {
        console.log("**************11111111")
        descriptor.value = descriptor.value.before(() => {
            console.log("**************")
            console.log(`Action-${key} 触发埋点!`);
        });
    };
};
export const after = function (...args) {
    console.log("**************")
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.after(() => {
            console.log(`Action-${key} 触发埋点!`);
        });
    };
};
export const around = function (...args) {
    console.log("**************")
    return function (target, key, descriptor) {
        descriptor.value = descriptor.value.around(() => {
            console.log(`Action-${key} 触发埋点before!`);
        }, () => {
            console.log(`Action-${key} 触发埋点after!`);
        });
    };
};



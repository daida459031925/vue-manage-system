import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        //公共前台路径默认跳转到公开页面
        path: '/',
        redirect: '/public/homepage'
    },
    {
        //后台路径默认跳转到私有后台页面
        path: '/system',
        redirect: '/dashboard'
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
            }, {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/BaseTable.vue")
            }, {
                path: "/charts",
                name: "basecharts",
                meta: {
                    title: '图表'
                },
                component: () => import ( /* webpackChunkName: "charts" */ "../views/BaseCharts.vue")
            }, {
                path: "/form",
                name: "baseform",
                meta: {
                    title: '表单'
                },
                component: () => import ( /* webpackChunkName: "form" */ "../views/BaseForm.vue")
            }, {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/Tabs.vue")
            }, {
                path: "/donate",
                name: "donate",
                meta: {
                    title: '鼓励作者'
                },
                component: () => import ( /* webpackChunkName: "donate" */ "../views/Donate.vue")
            }, {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import ( /* webpackChunkName: "permission" */ "../views/Permission.vue")
            }, {
                path: "/i18n",
                name: "i18n",
                meta: {
                    title: '国际化语言'
                },
                component: () => import ( /* webpackChunkName: "i18n" */ "../views/I18n.vue")
            }, {
                path: "/upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => import ( /* webpackChunkName: "upload" */ "../views/Upload.vue")
            }, {
                path: "/icon",
                name: "icon",
                meta: {
                    title: '自定义图标'
                },
                component: () => import ( /* webpackChunkName: "icon" */ "../views/Icon.vue")
            }, {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import (/* webpackChunkName: "404" */ '../views/404.vue')
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import (/* webpackChunkName: "403" */ '../views/403.vue')
            }, {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/User.vue')
            }, {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器'
                },
                component: () => import (/* webpackChunkName: "editor" */ '../views/Editor.vue')
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    }, {
        path: "/public/homepage",
        name: "Homepage",
        meta: {
            title: '主页'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/public/HomePage.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

//在访问需要走的路径之前进行当前内容判断
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    //拿到用户对应的角色权限
    const role = localStorage.getItem('ms_username');

    var pathPublicRegex = /^(\/public\/\w*)$/;
    var pathSystemRegex = /^(\/system\/\w*)$/;

    var path = to.path;
    if(pathPublicRegex.test(path)){
        console.log(role);
        console.log(router.routes);
        console.log(to.path);
        console.log(to);
        next();
        return;
    }

    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }

//     这里列一下正则的特殊字符及其用法，加深理解和映象。
// * \ 将字符变为特殊或非特殊字符。如 n 变为换行符 \n，特殊符号 ( 变为字符 \(。
// * ^ 匹配字符串起始位置。
// * $ 匹配字符串结束位置。
// * * 匹配前面的子表达式零到多次。
// * + 匹配前面的子表达式一到多次。
// * ? 匹配前面的子表达式零到一次。
// * {n} 匹配前面的子表达式的n个，如 o{2} 能够匹配 food 不能匹配 god。
// * {n,} 至少匹配n个前面的子表达式，如 o{2,} 能够匹配 fooooood 不能匹配 god。
// * {n, m} 至少匹配n次，至多匹配m次。
// * 非贪婪模式 默认为贪婪模式，如 o+ 将匹配 foooood 的所有 o。而非贪婪模式（在匹配符后面加 ?），如 o+? 则只会匹配一个o
//         * . 匹配除换行符外任何单个字符。换行符为 \n 和 \r。
// * (x) 捕获括号，匹配并记住匹配项。
// * (?:x) 非捕获括号，匹配并不记住匹配项。如 /(?:foo){1,2}/，这里将 foo 作为一个整体进行匹配1到2次。
//     * x(?=y) 匹配x仅仅在x后面跟y的时候。?=y 表示字符串末尾是y。
// * x(?!y) 匹配x仅仅在x后面不跟着y的时候。?!y 表示字符串末尾不是y。
// * x|y 匹配 x 或 y，如 jack|rose 就可以匹配到 jack 和 rose 两个字符串。
// * [xyz] 匹配方括号内任意字符。
// * [^xyz] 反向字符集，匹配除方括号内字符的任意字符。
// * [0-9] 范围匹配，匹配0-9范围内任意字符。
// * \w 查找单词字符。单词字符包括：a-z、A-Z、0-9，以及下划线。
// * \W 查找非单词字符。
// * \d 查找数字字符。
// * \D 查找非数字字符。
// * \s 查找空白字符。空白字符包括空格、\n、\f、\r、\t、\v。
// * \S 查找非空白字符。
// * \b 匹配单词边界，通常匹配单词开头和结尾。如 /\bcd/ 匹配 cdkey。
// * \B 匹配非单词边界。如 /\Bcd/ 匹配 abcd。
// * \O 查找 NULL 字符。
// * \n 换行符。
// * \f 换页符。
// * \r 回车符。
// * \t 制表符。
// * \v 垂直制表符。
//
// 修饰符
// i 执行对大小写不敏感的匹配。
// g 执行全局匹配。
// m 执行多行匹配。

});

export default router;

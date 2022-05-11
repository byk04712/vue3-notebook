- 第一篇 框架设计概览
  - 第 1 章 权衡的艺术
    - 1.1 命令式和声明式
    - 1.2 性能与可维护性的权衡
    - 1.3 虚拟 DOM 的性能到底如何
    - 1.4 运行时和编译时
    - 1.5 总结
  - 第 2 章 框架设计的核心要素
    - 2.1 提升用户的开发体验
    - 2.2 控制框架代码的体积
    - 2.3 框架要做到良好的 Tree-Shaking
    - 2.4 框架应该输出怎样的构建产物
    - 2.5 特性开发
    - 2.6 错误处理
    - 2.7 良好的 TypeScript 类型支持
    - 2.8 总结
  - 第 3 章 Vue.js 3 的设计思路
    - 3.1 声明式的描述 ui
    - 3.2 初识渲染器
    - 3.3 组件的本质
    - 3.4 模版的工作原理
    - 3.5 Vue.js 是各个模块组成的有机整体
- 第二篇 响应系统
  - 第 4 章 响应系统的作用与实现
    - 4.1 响应式数据与副作用函数
    - 4.2 响应式数据的基本实现
    - 4.3 设计一个完善的响应系统
    - 4.4 分支切换与cleanup
    - 4.5 嵌套的 effect 与 effect 栈
    - 4.6 避免无限递归循环
    - 4.7 调度执行
    - 4.8 计算属性 computed 与 lazy
  - 第 5 章 非原始值的响应式方案
  - 第 6 章 原始值的响应式方案
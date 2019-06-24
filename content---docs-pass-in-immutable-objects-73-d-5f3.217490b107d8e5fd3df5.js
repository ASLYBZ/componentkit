(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return i}),n.d(t,"rightToc",function(){return c}),n.d(t,"default",function(){return l});n(0);var r=n(125);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={title:"Pass in Immutable Objects"},c=[],u={rightToc:c},s="wrapper";function l(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(s,o({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Objects passed into components should be immutable."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"+new")," is called on a background thread. It can even be called on multiple threads simultaneously for the same parameters."),Object(r.b)("p",null,"If you pass in mutable objects with ",Object(r.b)("inlineCode",{parentName:"p"},"nonatomic")," properties, you will introduce thread safety crashes."),Object(r.b)("p",null,"Even if you pass in mutable objects that have only ",Object(r.b)("inlineCode",{parentName:"p"},"atomic")," properties, you are introducing a logic race condition. Rendering the exact same object twice could result in different outputs, which doesn't make any sense!"))}l.isMDXComponent=!0}}]);
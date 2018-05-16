---
title: CSS小技巧
categories: CSS/SCSS
---

隐藏浏览器滚动条

- 方法1

```css
body {
  overflow-y: hidden;
}
```

- 方法2

```javascript
document.body.style.overflowY = 'hidden';
```

- 方法3

```javascript
var scrollY = document.querySelector("body");
scrollY.style.cssText += 'overflow-y:hidden';
```

- 方法4

```css
/* css */
.hide{ 
  overflow-y: hidden 
}

/* JavaScript */ 
document.body.classlist.add("hide"),
```


清除IE搜索框默认右端的X

```css
input[type="search"]::-ms-clear,
input[type="search"]::-ms-reveal {
  display: none;
}
```

清除Chrome搜索框默认右端的X
```css
.searchbox-input::-webkit-search-decoration,
.searchbox-input::-webkit-search-cancel-button,
.searchbox-input::-webkit-search-results-button,
.searchbox-input::-webkit-search-results-decoration {
  display: none;
}
```

<!-- more -->

链接失效

```css
pointer-events: none;
```

元素内的文字及其子元素将不会被选中

```css
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
```
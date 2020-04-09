**Fontawesome**
```html
<script src="https://kit.fontawesome.com/59c082e949.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">

<i class="fa fa-cog fa-2x fa-spin"></i>
<i class="fab fa-github fa-5x fa-fw"></i>
```

**remove li style**

`ul { list-style: none; }`

**background**
```js
// b-image b-repeat b-position/b-size
background: url('../images/img1.jpg') no-repeat  center  center/cover;
```

**文字+背景居中**
```js
a {
  display: block;
  text-align: center;
  line-height: 60px;
}
```

**VS Code Lorem shortcut**

`lorem15 enter` 15 words

`lorem*5 enter` 5 lines

 **背景图片Overlay**
 `z-index` [won't work](https://stackoverflow.com/a/9191845) in position static (default)
 ```js
 #showcase { position: relative; }
 #showcase .overlay {
  background: #12121299;
  position: absolute;
  width: 100%;
  height: 100%;
}
#showcase .container {
  position: relative;
  z-index: 1;
```

**Use `text-align` to center `inline-block`**
```js
.container { text-align: center; }
.container a { display: inline-block; }
```

**html特殊字符**

© `&copy;`
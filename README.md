## [Demo](https://bobbyliu117.github.io/css-t1/)

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

 `z-index` not needed if overlay is background (1st element, 1st render -> bg)
 ```js
 #showcase { position: relative; }
 #showcase .overlay {
  background: #12121299;
  position: absolute;
  top: 0;
  left: 0;
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

**input and label**

`label for` -> `input id`

`label name` -> form-data key for form `submit` action
```js
<label for="name">Name</label>
<input id="name" type="text" name="name">
```

**textarea**

Must close!

use `width:100%` to expand the whole line. display block won't work, `input` same
```js
<textarea id="message" name="message"></textarea>
```

**outline attribute**

focus时的border，`input`, `textarea`, `button` 等

**html特殊字符**

© `&copy;`

**media query**
1. `<link rel="stylesheet" media="screen and (max-width: 768px)" href="mobile.css">`
2. `@media(min-width:501px) and (max-width:500px) {}`

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

**Lorem shortcut**
`lorem15 enter` in vs code

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
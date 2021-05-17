[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://face-morpher.herokuapp.com/)
# FaceMorpher

## API
Deploy on Heroku. More detail you can see at API Doc.

### base64 圖片預測
> POST https://face-morpher.herokuapp.com/morph 

- Body parameters

|Body參數|類型|傳輸格式|描述|
|:------:|:--:|:--:|:--:|
|image1<font color=red>(必填)</font>|string|JSON|圖片base64編碼|
|image2<font color=red>(必填)</font>|string|JSON|圖片base64編碼|

```
Request
Content-Type: application/json

{
    "image1": "... base64 image",
    "image2": "... base64 image",
}
```

![](https://i.imgur.com/iODzXH6.png)

## Reference
[https://azmariewang.medium.com/](https://azmariewang.medium.com/)

[https://github.com/zhaoyao91/react-bootstrap-image-cropper](https://github.com/zhaoyao91/react-bootstrap-image-cropper)

[https://codepen.io/Sphinxxxx/pen/pZQRGB](https://codepen.io/Sphinxxxx/pen/pZQRGB)
let compressRatio = 0.8, // 圖片壓縮比例
    imgNewWidth = 254, // 圖片新寬度
    imgDom,
    canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");
/**
 * File 轉 base64
 * @param {*} file 
 */
 export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
/**
 * 取得圖片大小
 * @param {*} file 
 */
 export const getSize = (file) => new Promise((resolve, reject) => {
    var _URL = window.URL || window.webkitURL;
    var img = new Image();

    img.onload = () => resolve({ height: img.height, width: img.width });
    img.onerror = reject;

    img.src = _URL.createObjectURL(file);
    imgDom = img;
});
/**
 * 壓縮圖片並回傳壓縮後的base64與size
 * @param {*} file 
 * @param {*} sizeImage 
 * @param {*} imageUrl 
 */
 export const getCompressImage = (file, sizeImage, imageUrl) => new Promise((resolve, reject) => {
    var width = sizeImage.width, // 圖片原始寬度
        height = sizeImage.height, // 圖片原始高度
        imgNewHeight = imgNewWidth * height / width, // 圖片新高度
        newImg;

    console.log("檔案大小約 " + Math.round(file.size / 1000));

    // 使用 canvas 調整圖片寬高
    canvas.width = imgNewWidth;
    canvas.height = imgNewHeight;
    context.clearRect(0, 0, imgNewWidth, imgNewHeight);

    // 調整圖片尺寸
    context.drawImage(imgDom, 0, 0, imgNewWidth, imgNewHeight);

    // 顯示新圖片
    newImg = canvas.toDataURL("image/jpeg", compressRatio).split(",")[1];
    console.log("檔案大小約 " + Math.round(0.75 * newImg.length / 1000));
    resolve({ width, height, newImg, imgNewHeight, imgNewWidth });
});


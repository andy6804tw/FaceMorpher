import { useRef } from "react";
import { ImageCropper, HiddenCropper } from "react-bootstrap-image-cropper";
import axios from 'axios';


import { toBase64, getSize, getCompressImage } from './compress';
import './Morph.css';
import './imagePreview.css'

function Morph() {
  // if you don't care the onChange event, you can use a ref to retrieve the cropped file
  const fileRef_1 = useRef();
  const fileRef_2 = useRef();
  let file_1,file_2;
  
  function handleChange_1(croppedFile) {
    file_1=croppedFile;
    console.log(fileRef_1.current);
    let reader = new FileReader();
    reader.onload = function() {
      document.getElementById('imgPreview_1').style.backgroundImage = 'url(' + reader.result + ')';
      document.getElementById('imgPreview_1').setAttribute('data-text','');
      document.getElementById('imgStatus_1').setAttribute('data-text','edit');
      // document.getElementById('imgPreview_1').style.setProperty('--content','');
      // document.getElementById('imgPreview_1').sheet.insertRule("#imgPreview_1::before{color:blue;}", 0);
    }
    reader.readAsDataURL(croppedFile);
  }
  function handleChange_2(croppedFile) {
    file_2=croppedFile;
    console.log(fileRef_2.current);
    let reader = new FileReader();
    reader.onload = function() {
      document.getElementById('imgPreview_2').style.backgroundImage = 'url(' + reader.result + ')';
      document.getElementById('imgPreview_2').setAttribute('data-text','');
      document.getElementById('imgStatus_2').setAttribute('data-text','edit');
    }
    reader.readAsDataURL(croppedFile);
  }
  function cal(){
    document.getElementById('imgResult').style.backgroundImage = `url('https://i.imgur.com/u88PcD5.gif')`;
  }
  
  async function call() {
    console.log(file_1);
    console.log(file_2);
    const base64Image_1 = await toBase64(file_1);
    // const sizeImage_1 = await getSize(fileRef_1.current);
    // const base64ImageCompress_1 = await getCompressImage(fileRef_1.current, sizeImage_1, base64Image_1);
    const base64Image_2 = await toBase64(file_2);
    // const sizeImage_2 = await getSize(fileRef_2.current);
    // const base64ImageCompress_2 = await getCompressImage(fileRef_2.current, sizeImage_2, base64Image_2);

    axios.post(` http://127.0.0.1:5000/morph`, {
      image1: base64Image_1.split(',')[1],
      image2: base64Image_2.split(',')[1]
      // image: base64Image.split(',')[1]
    })
      .then((response) => {
        var dataObject = response.data;
        // POST success
        const filename = dataObject.filename;
        const imgResult = dataObject.result.split("'")[1];
        console.log('done');
        document.getElementById('showResult').classList.remove('d-none');
        document.getElementById('imgResult').style.backgroundImage = `url(data:image/jpg;base64,${imgResult})`;
      },
        (error) => {
          // var message = error.response.data.message;
          console.log('QQ失敗了 ' + error);
        }
      );
  }
  return (
    <div>
      <div className="wrapper">
        {/* Image 1 */}
        <div className="box m-5" onClick={() => fileRef_1.current.trigger()}>
          <div className="js--image-preview" data-text="photo_size_select_actual" id="imgPreview_1"></div>
          <div className="upload-options">
            <label data-text="add" id="imgStatus_1"></label>
          </div>
        </div>
        <HiddenCropper
          triggerRef={fileRef_1}
          onCropped={handleChange_1}
          cropOptions={{ aspect: 1 / 1, maxZoom: 10 }}
          outputOptions={{ maxWidth: 254, maxHeight: 254 }}
          previewOptions={{ width: 254, height: 254 }}
        />
        {/* Image 2 */}
        <div className="box m-5" onClick={() => fileRef_2.current.trigger()}>
          <div className="js--image-preview" data-text="photo_size_select_actual" id="imgPreview_2"></div>
          <div className="upload-options">
            <label data-text="add" id="imgStatus_2"></label>
          </div>
        </div>
        <HiddenCropper
          triggerRef={fileRef_2}
          onCropped={handleChange_2}
          cropOptions={{ aspect: 1 / 1, maxZoom: 10 }}
          outputOptions={{ maxWidth: 254, maxHeight: 254 }}
          previewOptions={{ width: 254, height: 254 }}
        />
        {/* Resilt Image */}
        <div className="box m-5 d-none" id="showResult">
          <div className="js--image-preview" data-text="" id="imgResult"></div>
          <div className="upload-options">
            <label className="label_result">Result</label>
          </div>
        </div>
      </div>
      <button onClick={call}>Click</button>
      {/* <ImageCropper
        fileRef={fileRef_1}
        // onChange={handleChange}
        cropOptions={{ aspect: 1 / 1, maxZoom: 10 }}
        outputOptions={{ maxWidth: 254, maxHeight: 254 }}
        previewOptions={{ width: 254, height: 254 }}
      />
      <ImageCropper
        fileRef={fileRef_2}
        // onChange={handleChange}
        cropOptions={{ aspect: 1 / 1, maxZoom: 10 }}
        outputOptions={{ maxWidth: 254, maxHeight: 254 }}
        previewOptions={{ width: 254, height: 254 }}
      />
      <img id="imgResult" alt="" />
      <button onClick={call}>Click</button> */}
    </div>
  );
}

export default Morph;

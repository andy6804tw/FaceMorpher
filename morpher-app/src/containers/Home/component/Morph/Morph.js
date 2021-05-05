import { useRef } from "react";
import { ImageCropper } from "react-bootstrap-image-cropper";

import './Morph.css';

function Morph() {
    // if you don't care the onChange event, you can use a ref to retrieve the cropped file
  const fileRef_1 = useRef();
  const fileRef_2 = useRef();

//   function handleChange_1(croppedFile) {
//     console.log(croppedFile);
//     console.log(fileRef.current);
//   }
  function call(){
      console.log(fileRef_1.current);
      console.log(fileRef_2.current);
  }
  return (
    <div>
        <ImageCropper
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

        <button onClick={call}>Click</button>
    </div>
  );
}

export default Morph;

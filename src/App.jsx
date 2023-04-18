import { useEffect, useRef, useState } from "react";
import { storage } from "./firebase";

import { ref, uploadBytes } from "firebase/storage";

import "./App.css";

function App() {
  const [files, setFiles] = useState([]);

  const inputRef = useRef();

  const uploadFile = (e) => {
    e.preventDefault();
    if (files.length == 0) {
      alert("Please Upload a File First");
      return;
    }
    files.forEach((file) => {
      const storageRef = ref(storage, `models/${file.name}`);
      uploadBytes(storageRef, file).then(() => {
        alert("Model Uploaded");
      });
    })
    inputRef.current.reset();
    setFiles([]);
  };
  useEffect(() => { 
    console.log(files);
  }, [files]);
  return (
    <div className="App">
      <form ref={inputRef} onSubmit={uploadFile} className="form">
        <div className="upload_container">
          <input
            className="upload"
            type="file"
            onChange={(e) => {
              setFiles((files) => {return [...files, ...e.target.files]});
            }}
            multiple
          />
          <p>Click to Upload Your Files Here</p>
        </div>
        <button type="submit" className="btn">
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;

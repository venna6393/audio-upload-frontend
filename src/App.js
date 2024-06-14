import React from "react";
import UploadForm from "./UploadForm";
import MusicList from "./MusicList";

const App = () => {
  return (
    <div>
      <h1>Music Upload</h1>
      <UploadForm />
      <h2>Uploaded Music Files</h2>
      <MusicList />
    </div>
  );
};

export default App;

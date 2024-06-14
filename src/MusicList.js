import React, { useEffect, useState } from "react";
import axios from "axios";

const MusicList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await axios.get("http://localhost:5000/files");
      setFiles(res.data);
    };
    fetchFiles();
  }, []);

  return (
    <ul>
      {files.map((file) => (
        <li key={file.id}>
          <a
            href={`http://localhost:5000/files/${file.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {file.file_name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MusicList;

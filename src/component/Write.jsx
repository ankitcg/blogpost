import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
           
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <div className="mx-20 my-10 w-1/2">
        <input
          className="border w-full h-10"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="my-20">
          <ReactQuill
            className="h-56 my-10"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="my-10 w-64">
        <div className="border">
          <h1 className="text-lg font-semibold mx-2">Publish</h1>
          <h1 className="my-2 mx-2">
            <b>Status: </b> Draft
          </h1>
          <h1 className="my-2 mx-2">
            <b>Visibility: </b> Public
          </h1>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <h1 className="my-2 mx-2" htmlFor="file">
            Upload Image
          </h1>
          <div className="flex mx-2">
            <button className="w-28 border bg-blue-400 rounded-3xl">Save as a draft</button>
            <button className="mx-6 w-16 border bg-blue-400 rounded-3xl " onClick={handleClick}>
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;

import React, { ChangeEvent, useState } from "react";
import Navbar from "../components/Navbar";
import { PublishState } from "../types/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();

  const [blogContent, setBlogContent] = useState<PublishState>({
    title: "",
    content: "",
  });

  async function publishBlog() {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");

      const response = await axios({
        method: "post",
        url: `${url}/api/v1/blog`,
        responseType: "json",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: blogContent,
      });

      const blogId = response.data.data.id;
      navigate(`/blog/${blogId}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="publish-page-container w-full h-full flex flex-col items-center">
        <div className="navbar-container w-10/12">
          <Navbar />
        </div>

        <form
          className="flex flex-col mt-12 w-10/12"
          onSubmit={(e) => {
            e.preventDefault();
            publishBlog();
          }}
        >
          <input
            type="text"
            placeholder="Title"
            className="border-2 border-gray-400 outline-none px-3 py-2 rounded-md mb-5"
            onChange={(e) => {
              setBlogContent((prev) => {
                return {
                  ...prev,
                  title: e.target.value,
                };
              });
            }}
          />

          <textarea
            placeholder="Write Something here..."
            id="content"
            rows={10}
            className="border-2 resize-none border-gray-400 outline-none px-3 py-2 rounded-md mb-5"
            onChange={(e) => {
              setBlogContent((prev) => {
                return {
                  ...prev,
                  content: e.target.value,
                };
              });
            }}
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-600 text-white py-2 px-4 rounded-md font-semibold shadow-md self-start"
          >
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Publish;

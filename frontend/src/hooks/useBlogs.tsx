import { useEffect, useState } from "react";
import axios from "axios";
import { BlogsState } from "../types/types";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogsState[]>([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  async function fetchBlogPosts() {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");
      const response = await axios({
        method: "get",
        url: `${url}/api/v1/blog/bulk`,
        responseType: "json",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlogs(response.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    loading,
    blogs,
  };
};

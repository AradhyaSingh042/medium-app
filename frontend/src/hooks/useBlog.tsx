import { useEffect, useState } from "react";
import axios from "axios";
import { BlogsState, UseBlogProps } from "../types/types";

export const useBlog = ({ id }: UseBlogProps) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogsState>();

  useEffect(() => {
    fetchBlogPost();
  }, []);

  async function fetchBlogPost() {
    try {
      setLoading(true);
      const url = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");
      const response = await axios({
        method: "get",
        url: `${url}/api/v1/blog/${id}`,
        responseType: "json",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlog(response.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    loading,
    blog,
  };
};

import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Something is error", error));
  }, []);

  return (
    <div className="md:w-2/3">
      <p className="text-xl">Total data: {blogs.length}</p>
    </div>
  );
};

export default Blogs;

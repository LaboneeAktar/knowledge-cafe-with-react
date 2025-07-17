import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  // Add blog to bookmark component
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="pt-5 md:pt-10 lg:pt-10 md:flex lg:flex lg:mx-36">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;

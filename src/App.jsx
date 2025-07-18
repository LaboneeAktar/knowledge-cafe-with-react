import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  // Add blog to bookmark component
  const handleAddToBookmark = (id, blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

    //
    if (bookmarks.includes(id)) {
      const remainingBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      console.log(bookmarks);
      setBookmarks(remainingBookmarks);
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  //Add total reading time
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = parseFloat(readingTime) + parseFloat(time);
    setReadingTime(newReadingTime);

    //Remove Bookmarks
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="pt-5 md:pt-10 lg:pt-10 md:flex lg:flex lg:mx-36">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;

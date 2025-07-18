import PropTypes from "prop-types";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

//
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  //Toggle Bookmark button
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMarkedRead, setIsMarkedRead] = useState(true);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const toggleRead = () => {
    setIsMarkedRead(!isMarkedRead);
  };

  return (
    <div className="mb-14 space-y-2">
      <img
        className="w-full h-[300px] object-cover mb-8 rounded-md"
        src={cover}
        alt={`Cover picture of the ${title}`}
      />
      <div className="flex justify-between mb-2">
        <div className="flex">
          <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-lg font-bold">{author}</h3>
            <p className="text-sm text-slate-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-lg text-slate-500">
            {reading_time} min read
          </span>
          <button
            onClick={() => {
              handleAddToBookmark(blog);
              toggleBookmark();
            }}
            className="ml-2 text-xl"
          >
            {isBookmarked && isMarkedRead ? (
              <FaBookmark></FaBookmark>
            ) : (
              <FaRegBookmark></FaRegBookmark>
            )}
          </button>
        </div>
      </div>
      <h2 className="text-3xl lg:pt-2">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="text-sm text-slate-500" href="">
              {hash}
            </a>{" "}
          </span>
        ))}
      </p>
      <button
        onClick={() => {
          handleMarkAsRead(id, reading_time);
          toggleRead();
        }}
        className="text-purple-800 font-bold underline"
      >
        {isMarkedRead ? "Mark As Read" : "Already Read"}
      </button>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;

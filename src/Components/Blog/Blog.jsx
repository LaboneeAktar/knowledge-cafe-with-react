import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-14 space-y-2">
      <img
        className="w-full object-cover mb-8 rounded-md"
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
        <div>
          <span className="text-sm text-slate-500">
            {reading_time} min read
          </span>
          {/* <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <FaBookmark></FaBookmark>
          </button> */}
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="text-sm text-slate-500" href="">
              {hash}
            </a>{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;

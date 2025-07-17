import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { title, cover, author } = blog;
  return (
    <div>
      <img src={cover} alt={`Picture of ${title}`} />
      <h1>{title}</h1>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;

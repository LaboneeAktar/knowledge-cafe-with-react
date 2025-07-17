import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 lg:ml-6 bg-slate-100 py-8 rounded-lg">
      <h2 className="text-xl text-center font-semibold ">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;

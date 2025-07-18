import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 lg:ml-6">
      <div className="mb-4">
        <h3 className="text-lg text-center text-blue-700 font-semibold border rounded-md border-blue-300 px-5 py-2 bg-sky-50">
          Spend Time on Read: {readingTime}
        </h3>
      </div>
      <div className=" bg-slate-100 py-8 rounded-lg">
        <h2 className="text-xl text-center font-semibold ">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;

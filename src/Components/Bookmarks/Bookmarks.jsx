const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3">
      <h2 className="text-xl">Bookmarks: {bookmarks.length}</h2>
    </div>
  );
};

export default Bookmarks;

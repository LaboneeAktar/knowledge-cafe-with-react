import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 lg:mx-36">
      <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;

import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-auto border-b-2 lg:max-w-screen-lg">
      <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;

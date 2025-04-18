import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-10 md:py-4">
      <Image
        width={25}
        height={25}
        src="/logo.png"
        alt="Logo"
        className="bg-gray-200"
      />
      <div className="flex justify-between gap-4 items-center">
        <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-200 cursor-pointer">
          <Image width={20} height={20} src="/globe.svg" alt="Globe" />
        </div>
        <div className="flex justify-between items-center gap-2 rounded-full py-2 px-3 border border-gray-300 hover:shadow-md cursor-pointer">
          <MenuIcon />
          <div className="rounded-full p-0.5 flex justify-center items-center bg-gray-400 cursor-pointer">
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

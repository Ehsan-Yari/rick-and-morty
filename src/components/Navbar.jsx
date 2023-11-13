import Logo from "../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", active: true },
    { id: 2, name: "Characters", active: false },
    { id: 3, icon: Logo },
    { id: 4, name: "Shows", active: false },
    { id: 5, name: "Games", active: false },
  ];
  return (
    <nav className="flex items-center justify-between py-5 px-10">
      {navItems.map((item) => {
        return (
          <div key={item?.id}>
            {item?.name ? (
              <span
                className={`font-semibold px-5 py-1 rounded-full ${
                  item?.active
                    ? "bg-black pointer-events-none text-white"
                    : "cursor-pointer hover:bg-black/60 hover:text-white transition-all duration-300"
                }`}
              >
                {item?.name}
              </span>
            ) : (
              <img src={item?.icon} alt="Rick and Morty" className="w-60" />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;

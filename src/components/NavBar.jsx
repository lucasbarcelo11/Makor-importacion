import logoMakor from "/makorhorizontalblanco.svg";

const NavBar = () => {
  return (
    <nav className="bg-gray-700 h-20 flex items-center justify-center">
      <div className="flex items-center">
        <img src={logoMakor} alt="Logo Makor" className="h-32 max-h-full" />
      </div>
      
    </nav>
  );
};

export default NavBar;

import logoMakor from "/makorhorizontalblanco.svg";

const NavBar = () => {
  return (
    <nav className="dark:bg-gray-900 h-20 flex items-center justify-between px-6 md:px-16">
      <div className="flex items-center">
        <img src={logoMakor} alt="Logo Makor" className="h-32 max-h-full" />
      </div>
      <ul className="flex gap-8 text-white font-serif text-lg">
        <li className="hover:text-gray-300 cursor-pointer transition">Contactos</li>
        <li className="hover:text-gray-300 cursor-pointer transition">Ubicación</li>
      </ul>
    </nav>
  );
};

export default NavBar;

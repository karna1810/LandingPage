import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <div className="text-xl">VR Company</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex  gap-x-4">
            <a className="rounded-lg border px-3 py-2" href="#">
              Sign In
            </a>
            <a
              className="rounded-lg px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800"
              href="#"
            >
              Create An Account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

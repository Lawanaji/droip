import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="w-full bg-white shadow-md">
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <nav className="container  flex items-center justify-between py-4 container mx-auto px-4">
          <div className="flex items-center gap-8">
            {" "}
            {/* Added gap-8 here */}
            <Link to="/" className="text-lg font-bold">
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
            <ul className="flex items-center gap-6">
              {" "}
              {/* Reduced gap from space-x-6 to gap-6 */}
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary hover:text-secondary flex items-center gap-1 transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-secondary px-4 py-2 rounded hover:text-primary transition-colors">
              Log in
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;

import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <header className='header'>
      <Link to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md text-blue-500'>
        <p className='blue-gradient_text'>CX</p>
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link to='/about' activeProps={{ className: "text-blue-600" }} inactiveProps={{ className: "text-black" }}>
          About
        </Link>
        <Link to='/projects' activeProps={{ className: "text-blue-600" }} inactiveProps={{ className: "text-black" }}>
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h2 className="text-xl font-bold tracking-tighter text-primary">
      <Link to="/">
        NEX<span className="text-black">BUY.</span>
      </Link>
    </h2>
  );
};

export default Logo;

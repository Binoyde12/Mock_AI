import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/img/MockAI.png"
        alt="Logo"
        width={60}
        height={60}
        className="min-w-10 min-h-10 object-contain"
      />
    </Link>
  );
};
import PropTypes from "prop-types";
const Hamburger = ({ onClick, size = 20 }) => {
  return (
    <svg
      style={{ width: size, height: size }}
      onClick={onClick}
      className="icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m16.5 5.25H12"
      ></path>
    </svg>
  );
};
Hamburger.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
};
export default Hamburger;


import PropTypes from "prop-types";
const CloseIcon = ({ size = 20 }) => {
  return (
    <svg
      style={{ width: size, height: size }}
     
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 26 26"
      xmlSpace="preserve"
    >
      <g>
        <path
        //   style=fill:#030104;
          d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l1.388,1.387c0.254,0.2550.67,0.2550.924,0L13,15.313L9.533,18.78c0.255,0.2550.67,0.2550.9250.002L7.22,17.394c0.2530.2560.2530.669,00.926l3.4683.467L7.221,9.534c0.2540.2560.2540.672,00.925l1.3881.388c0.2550.257,0.6710.257,0.925,0L13,10.689l3.4683.468c0.2550.257,0.6710.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l3.468,3.467l3.468,3.467C19.033,16.725,19.033,17.138,18.78,17.394z"
        />
      </g>
    </svg>
  );
};
CloseIcon.propTypes = {
 
  size: PropTypes.number,
};
export default CloseIcon;

export const RightArrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48.575"
      height="26.644"
      viewBox="0 0 48.575 26.644"
    >
      <path
        id="right-arrow"
        d="M35.253,107.5l-2.164,2.164,9.628,9.628H0v3.06H42.717l-9.628,9.628,2.164,2.164,13.322-13.322Z"
        transform="translate(0 -107.5)"
        fill={color}
      />
    </svg>
  );
};

export const LeftArrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48.575"
      height="26.644"
      viewBox="0 0 48.575 26.644"
    >
      <path
        id="right-arrow"
        d="M35.253,107.5l-2.164,2.164,9.628,9.628H0v3.06H42.717l-9.628,9.628,2.164,2.164,13.322-13.322Z"
        transform="translate(48.575 134.144) rotate(180)"
        fill={color}
      />
    </svg>
  );
};

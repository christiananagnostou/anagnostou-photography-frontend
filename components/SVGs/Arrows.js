export const RightArrow = ({ color = "#fff" }) => {
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

export const LeftArrow = ({ color = "#fff" }) => {
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

export const SmallArrowDown = ({ color = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.886"
      height="9.055"
      viewBox="0 0 15.886 9.055"
    >
      <path
        id="Path_5"
        data-name="Path 5"
        d="M7.944,106.2a1.109,1.109,0,0,1-.786-.326L.327,99.04A1.112,1.112,0,0,1,1.9,97.466l6.044,6.044,6.044-6.044A1.112,1.112,0,0,1,15.56,99.04L8.73,105.87A1.109,1.109,0,0,1,7.944,106.2Z"
        transform="translate(-0.001 -97.141)"
        fill={color}
      />
    </svg>
  );
};

export const SmallArrowUp = ({ color = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.886"
      height="9.055"
      viewBox="0 0 15.886 9.055"
    >
      <g id="arrow-down-sign-to-navigate" transform="translate(84.999 -100.141)">
        <path
          id="Path_5"
          data-name="Path 5"
          d="M7.944,106.2a1.109,1.109,0,0,1-.786-.326L.327,99.04A1.112,1.112,0,0,1,1.9,97.466l6.044,6.044,6.044-6.044A1.112,1.112,0,0,1,15.56,99.04L8.73,105.87A1.109,1.109,0,0,1,7.944,106.2Z"
          transform="translate(-69.112 206.336) rotate(180)"
          fill={color}
        />
      </g>
    </svg>
  );
};

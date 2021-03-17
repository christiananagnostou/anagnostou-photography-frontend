import Link from "next/link";

const buttonStyles = {
  border: "none",
  padding: "0.7rem 1.3rem",
  marginRight: "10px",
  color: "white",
  fontSize: "1rem",
  fontWeight: 100,
  cursor: "pointer",
};

const ButtonLink = ({ text, color, route }) => {
  const getColorHex = (color) => {
    switch (color) {
      case "orange":
        return "#F9A620";
      case "blue":
        return "#3A4555";
    }
  };

  return (
    <Link href={route}>
      <a style={{ ...buttonStyles, background: getColorHex(color) }}>{text}</a>
    </Link>
  );
};

export default ButtonLink;

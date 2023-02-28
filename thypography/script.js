function copyText(toCopyText) {
  navigator.clipboard.writeText(toCopyText);
  alert(`Copied ${toCopyText}`)
}



const hero = {
  title: {
    font_weight: 700,
    font_size: "3.125rem",
    line_height: "3.438rem",
    color: "black",
  },
  paragraphs: {
    font_weight: 400,
    font_size: "1.125rem",
    line_height: "1.563rem",
    color: "#464853",
  },
  buttons: {
    font_weight: 400,
    font_size: "1rem",
    line_height: "2.875rem",
    color: "black",
  },
  hero_party: {
    font_weight: 400,
    font_size: "0.938rem",
    line_height: "0.938rem",
    animation: "colorRotate 5s linear 0s infinite",
  },
};
const card = {
  title: {
    font_weight: 700,
    font_size: "1.5rem",
    line_height: "1.5rem",
    color: "black",
  },
  paragraph: {
    font_weight: 400,
    font_size: "1rem",
    line_height: "1.7em",
    color: "#464853",
  },
  hover_text: {
    font_weight: 800,
    font_size: "1.875rem",
    line_height: "2.625rem",
    color: "depends",
  },
};
const footer = {
  title: {
    font_weight: 800,
    font_size: "1.375rem",
    line_height: "1.375rem",
    color: "black",
  },
  paragraph: {
    font_weight: 450,
    font_size: "1rem",
    line_height: "1rem",
    color: "black",
    hover: {
      color: "#0066ff",
    },
  },
};
const colors = {
    color_code: {
      font_weight: 400,
      font_size: "1.875rem",
      line_height: "1.875rem",
      color: "black",
    },
    color_name: {
      font_weight: 400,
      font_size: "11px",
      line_height: "14px",
      color: "rgba(0, 0, 0, .6)",
    },
  },
  navbar = {
    font_weight: 450,
    font_size: "0.938rem",
    line_height: "0.938rem",
    color: "black",
    hover: {
      color: "#0066ff",
    },
  };

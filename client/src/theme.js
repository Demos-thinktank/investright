import { Menu as MenuIcon, FormClose } from "grommet-icons";
// import React from "react";
export const theme = {
  global: {
    font: {
      //   family: "Roboto",
      size: "1rem",
      height: "initial",
    },
    // color: "inherit",
    colors: {
      primary: "#333",
      good: "green",
      brand: "333",
      "accent-1": "#6FFFB0",
      "accent-3": "#81FCED",
      "accent-4": "#FFCA58",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-disabled": "#CCCCCC",
      "light-1": "#F8F8F8",
      "light-2": "#F2F2F2",
      "light-3": "#EDEDED",
      "light-4": "#DADADA",
      "dark-1": "#333333",
      "dark-2": "#555555",
      "dark-3": "#777777",
      "dark-4": "#999999",
      active: "transparent",
    },
    hover: {
      background: {
        color: undefined,
      },
    },
    breakpoints: {
      medium: { value: 1000 },
    },
  },
  layer: {
    background: "rgba(1,1,1,0.6)",
  },
  box: {
    background: {
      color: "tranparent",
    },
  },
  button: {
    // font: {
    //   weight: undefined,
    // },
    // hover: {
    //   background: {
    //     color: undefined,
    //   },
    //   color: "dark-1",
    // },
    color: "inherit",
    default: {
      // active?
      hover: {
        color: "accent-3",
      },
      background: "transparent",
      "background-color": "transparent",
      border: {
        color: "dark-1",
        width: `2px`,
        radius: "5px",
      },
      // padding: {
      //   vertical: undefined,
      //   horizontal: undefined,
      // },
      extend: (props) => {
        let extraStyles = "";
        if (props.info) {
          extraStyles += `
              text-transform: undefined;
            `;
        }
        return `
            // font-size: 12px;
            // font-weight: bold;
            ${extraStyles}
          `;
      },
    },
  },
  // menu: {
  //   icons: {
  //     down: MenuIcon,
  //     up: FormClose,
  //   },
  // },
};

// export const optionButton = {
//   button: {
//     // font: {
//     //   weight: undefined,
//     // },
//     background: "whitesmoke",
//     border: {
//       color: "dark-1",
//       width: `2px`,
//       radius: "0",
//     },
//     color: "#333",
//     // padding: {
//     //   vertical: undefined,
//     //   horizontal: undefined,
//     // },
//     extend: undefined,
//   },
// };

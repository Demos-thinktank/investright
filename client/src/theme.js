export const theme = {
  global: {
    font: {
      //   family: "Roboto",
      size: "1rem",
      height: "initial",
    },
    // color: "inherit",
    colors: {
      demosDark: "#1d3336",
      demosOrange: "#ee7155",
      demosTeal: "#85cdd1",
      demosLemon: "#feebb3",
      demosLight: "#e0f1f8",
      demosLightGrey: "#bfc6cf",
      demosDarkGrey: "#676c72",
      primary: "#333",
      good: "green",
      brand: "#333",
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
    // active: {
    //   secondary: {
    //     color: "#85ccd0",
    //     background: "#15343a",
    //   },
    // },
    hover: {
      primary: {
        color: "demosDark",
        background: "demosOrange",
        border: {
          color: "demosDark",
          width: `2px`,
          radius: "5px",
        },
      },
      secondary: {
        color: "demosTeal",
        background: "demosDark",
      },
      extend: (props) => {
        let extraStyles = "";
        if (props.alert) {
          extraStyles += `
          color: #1d3336;
          background: #FF4040;
          border: 2px solid #1d3336;
          border-radius: 5px;
          `;
        }
        return `
            ${extraStyles}
          `;
      },
    },
    // color: "inherit",
    default: {
      background: "transparent",
      border: {
        color: "demosDark",
        width: `2px`,
        radius: "5px",
      },
      // padding: {
      //   vertical: undefined,
      //   horizontal: undefined,
      // },
      extend: (props) => {
        let extraStyles = "";
        if (props.alert) {
          extraStyles += `
          color: #1d3336;
          background: #FF4040;
          border: 2px solid #FF4040;
          border-radius: 5px;
          `;
        }
        return `
            ${extraStyles}
          `;
      },
    },
    primary: {
      color: "demosDark",
      background: "demosOrange",
      border: {
        color: "demosOrange",
        width: `2px`,
        radius: "5px",
      },
    },
    secondary: {
      color: "demosDark",
      background: "demosTeal",
      border: {
        color: "demosDark",
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
        if (props.fundButton) {
          extraStyles += `
              padding: 1rem;
            `;
        }
        return `
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

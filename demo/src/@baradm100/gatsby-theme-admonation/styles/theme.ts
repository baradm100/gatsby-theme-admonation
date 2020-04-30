const Theme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `#2565AE`,
    linkColor: `#03accf`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1300px`,
  },
  fonts: {
    base:
      `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1260px`,
    },
    header: {
      height: `440px`,
      background: `linear-gradient(-45deg, #6078ea, #17ead9) repeat scroll 0 0 transparent`,
    },
  },
};

export default Theme;

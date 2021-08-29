const styles = {
  text: (darkTheme, darkMode, whiteMode) => {
    return {
      color: darkTheme ? darkMode : whiteMode,
    };
  },
};

export default styles;

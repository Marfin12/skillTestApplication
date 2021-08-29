import colors from "../../Colors";

const styles = {
  container: darkTheme => {
    return {
      borderColor: darkTheme ? colors.darkHeavyGray : colors.lightHeavyGray,
      borderBottomWidth: 3,
    };
  },
  text: darkTheme => {
    return {
      fontSize: 20,
      fontWeight: 'bold',
      color: darkTheme ? colors.lightMediumGray : colors.blackPrimary,
    };
  },
};

export default styles;

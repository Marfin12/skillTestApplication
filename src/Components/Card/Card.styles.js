import colors from '../../Colors';

const styles = {
  container: (whiteTheme) => ({
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: whiteTheme ? colors.darkHeavyGray : colors.whitePrimary,
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    elevation: 2,
  }),
};

export default styles;

import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  menu: {
    backgroundColor: colors.dark,
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding / 2,
    paddingVertical: metrics.basePadding,
    flexDirection: 'row'
  },
  option: {
    paddingHorizontal: metrics.basePadding,
  },
});

export default styles;

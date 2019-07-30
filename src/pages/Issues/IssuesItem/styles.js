import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    flexDirection: 'row'
  },
  info: {
    marginLeft: metrics.baseMargin,
    lineHeight: 5,
  },
  image: {
    height: 50,
    width: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: metrics.basePadding,
    marginRight: metrics.baseMargin * 2,
  },
  org: {
    fontSize: 14,
    color: colors.light,
  },
});

export default styles;

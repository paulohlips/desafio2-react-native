import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  header: {
    backgroundColor: colors.white,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  repo: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textInput: {
    backgroundColor: colors.white,
    height: 35,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-start'
  },
  icon: {
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default styles;

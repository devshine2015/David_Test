import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  itemContainer: {
    width: '100%',
    marginBottom: 50,
  },  
  itemWrapper: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkBox: {
    width: 200,
  },
  txtTitle: {
    marginBottom: 30,
  }
});
  
export default styles;
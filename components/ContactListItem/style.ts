import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-start',
    alignItems:"center",
    padding: 10,

  },
  leftContainer: {
    flexDirection: 'row',
  },

  midContainer: {
    marginLeft:10,
    justifyContent: 'space-around',
    marginRight:10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    
  },
  status: {
    textAlign:"left",
    fontSize: 16,
    color: 'grey',
    
  },

});

export default styles;
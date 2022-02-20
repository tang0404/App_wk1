import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.a}>
        <Text style={styles.t1}>第一週、</Text>
      </View>
      <View style={styles.b}>
        <Text style={styles.t2}>情況從</Text>
        <Text style={styles.t3}>糟糕</Text>
        <Text style={styles.t4}>變成</Text>
        <Text style={styles.t5}>難以理解</Text>        
      </View>
      <View style={styles.b}>
        <Text style={styles.name}>110919024 唐詩閔</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  a: {
    width: '100%',
    marginBottom: 25,
  },

  b: {
    width: '100%',
  },

  t1: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'left',
  },

  t2: {
    fontSize: 50,
    color: '#fff',
    textAlign: 'left',
  },

  t3: {
    fontSize: 80,
    color:'#fff',
    textAlign: 'left',
  },

  t4: {
    fontSize: 50,
    color: '#fff',
    position: 'absolute',
    left: 160,
    top: 100,
  },

  t5: {
    fontSize: 100,
    color:'#ff0000',
  },

  name: {
    fontSize: 15,
    color: '#848484',
    textAlign: 'left',
  },
});

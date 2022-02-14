import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Foco from './src/components/foco'; //no importa el nombre brou Componentes con mayúscula

export default function App() {
  return (
    <View style={styles.container}>
      <Foco></Foco>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

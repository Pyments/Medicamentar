import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Medicamentar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20A2EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 50,
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthDevice from './components/AuthDevice';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthDevice/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#006221',
    justifyContent: 'center',
  },
});

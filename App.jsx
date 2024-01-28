import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ToastAndroid } from 'react-native';

export default function App() {


  /**
   * @param {string} message - The text that will be displated in the android toast
   * @param {Number} [duration=2500] - The duration of the toast
   */
  const showAndroidToast = (message, duration = 2500) => {
    ToastAndroid.show(message, duration)
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{}}>
        <Text style={styles.pageHeader}>C64 | ToDo</Text>
        <Text style={styles.pageDescription}>Write down the stuff you need to do!</Text>
      </View>

      {/* Main body */}
      <View style={{ flex: 1, padding: 2, justifyContent: 'center', alignItems: "center" }}>
        <Text style={{ color: 'gray' }}>There is nothing to display yet.</Text>
      </View>

      {/* Kind of a footer ?? */}
      <View style={{ color: 'black' }}>
        <Button color={'#3c3c3c'} title='notify-something' onPress={() => { showAndroidToast('Commodore on the mafe !?') }}>Oya ?</Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 40
  },
  pageHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  pageDescription: {
    fontWeight: '400',
    fontStyle: 'italic',
    opacity: .7,
  },
});

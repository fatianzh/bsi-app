import { StyleSheet, View } from "react-native";

export default function ColumnLayout({children}) {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    }
  })
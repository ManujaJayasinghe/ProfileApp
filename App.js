import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Title bar */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Image source={require('./assets/profile.png')} style={styles.photo} />

        <View style={styles.line} />

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Manuja</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Text style={styles.icon}>✉</Text>
          <Text style={styles.value}>mjmpjayasinghe@students.nsbm.ac.lk</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Text style={styles.icon}>★</Text>
          <Text style={styles.value}>{points}</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => setPoints(points + 1)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'black',
    paddingTop: 40,
    paddingBottom: 15,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 10,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  value: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 22,
    marginRight: 10,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
  },
});

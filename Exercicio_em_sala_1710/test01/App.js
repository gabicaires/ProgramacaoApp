import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Slider } from 'react-native';
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons'; // Expo Icons for enhanced UI

const App = () => {
  const [brightness, setBrightness] = useState(50);
  const [volume, setVolume] = useState(30);

  return (
    <View style={styles.container}>
      {/* Ícones de opções no topo */}
      <View style={styles.topOptions}>
        <TouchableOpacity>
          <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="question-circle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Controle central */}
      <View style={styles.centralControl}>
        <View style={styles.outerRing}>
          <View style={styles.middleRing}>
            <View style={styles.innerRing}>
              <TouchableOpacity style={styles.centerButton}>
                <Text style={styles.centerButtonText}>●</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Seção Design */}
      <View style={styles.designSection}>
        <Text style={styles.sectionTitle}>Design</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Option 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Brightness</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={brightness}
              onValueChange={setBrightness}
              minimumTrackTintColor="#4caf50"
              maximumTrackTintColor="#ccc"
            />
            <Text style={styles.sliderValue}>{brightness}%</Text>
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Volume</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={volume}
              onValueChange={setVolume}
              minimumTrackTintColor="#2196f3"
              maximumTrackTintColor="#ccc"
            />
            <Text style={styles.sliderValue}>{volume}%</Text>
          </View>
        </View>
      </View>

      {/* Botões inferiores */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.roundButton}>
          <FontAwesome name="microphone" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <FontAwesome name="camera" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <FontAwesome name="video-camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 20,
  },
  centralControl: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  outerRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleRing: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  designSection: {
    width: '80%',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  sliderContainer: {
    width: '45%',
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  slider: {
    width: '100%',
  },
  sliderValue: {
    textAlign: 'right',
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 30,
  },
  roundButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3f51b5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
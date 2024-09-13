import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  CheckBox,
} from 'react-native';
const YourApp = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState('');

  const generatePassword = () => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allCharacters =
      lowerCaseLetters + upperCaseLetters + numbers + specialCharacters;

    // Độ dài ngẫu nhiên từ 8 đến 16 ký tự
    const passwordLength = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters[randomIndex];
    }

    setPassword(generatedPassword);
    setLength(passwordLength.toString()); // Đặt độ dài vừa tạo
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> PASSWORD</Text>
        <Text style={styles.title}> GENERATOR</Text>
      </View>

      <View style={styles.content1}>
        <TextInput style={styles.TextInput1} value={password} />
      </View>

      <View style={styles.content2contain}>
        <View style={styles.content2}>
          <Text style={styles.lbl1}>Password length</Text>
          <TextInput style={styles.TextInput2} value={length} />
        </View>
        <View style={styles.content2}>
          <Text style={styles.lbl1}>Include lowercase letters</Text>

          <CheckBox style={styles.checkbox} value={true} />
        </View>

        <View style={styles.content2}>
          <Text style={styles.lbl1}>Include upercase letters</Text>

          <CheckBox style={styles.checkbox} />
        </View>

        <View style={styles.content2}>
          <Text style={styles.lbl1}>Include Number</Text>
          <CheckBox value={true} style={styles.checkbox} />
        </View>

        <View style={styles.content2}>
          <Text style={styles.lbl1}>Include special symbol</Text>
          <CheckBox style={styles.checkbox} />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={generatePassword}>
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 700 }}>
          GENERATE PASSWORD
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23235b',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: 25,
  },
  content1: {
    // position:'relative',

    marginTop: 50,
    marginBottom: 80,
  },
  TextInput1: {
    // position:'absolute',
    width: 297,
    height: 55,
    backgroundColor: '#151537',
    color: 'white',
    textAlign: 'center',
  },
  TextInput2: {
    width: 118,
    height: 33,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  content2contain: {
    // marginTop:-200
    marginBottom: 100,
  },
  content2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 350,
    marginTop: 30,
  },
  lbl1: {
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
  },
  btn: {
    backgroundColor: '#3B3B98', // Màu nền cho nút
    width: 269,
    height: 55,
    borderRadius: 5,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YourApp;

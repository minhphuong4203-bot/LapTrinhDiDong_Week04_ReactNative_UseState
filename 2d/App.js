import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [count, setCount] = useState(1);
  const pricePerItem = 141800; // Giá cho mỗi sản phẩm

  const totalPrice = count * pricePerItem; // Tính tổng thành tiền

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 130,
            position: 'absolute',
          }}>
          <Image
            style={{ width: 104, height: 127, marginTop: 15, marginLeft: 10 }}
            source={require('./book.png')}
          />

          <View
            style={{
              height: 127,
              justifyContent: 'space-around',
              marginTop: 12,
              marginLeft: 18,
            }}>
            <Text style={(styles.text12, styles.fontWeight700)}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={(styles.text12, styles.fontWeight700)}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={[styles.redFont, styles.fontWeight700, { fontSize: 18 }]}>
              141.800 đ
            </Text>
            <Text
              style={[
                styles.fontWeight700,
                { textDecorationLine: 'line-through', color: '#808080' },
              ]}>
              141.800 đ
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={styles.containerBtnItem}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCount(count - 1)}>
                    <Text
                      style={[
                        styles.buttonText,
                        { paddingLeft: 4.4, paddingBottom: 1 },
                      ]}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{paddingLeft: 14}}>{count}</Text>
                  <Text style={styles.count}></Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCount(count + 1)}>
                    <Text
                      style={[
                        styles.buttonText,
                        { paddingLeft: 2.8, paddingBottom: 20 },
                      ]}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={[styles.fontWeight700, { color: 'blue' }]}>
                {' '}
                mua sau
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 172,
            alignItems: 'center',
          }}>
          <Text
            style={[styles.fontWeight700, { fontSize: 12, marginLeft: 12 }]}>
            Mã giảm giá đã lưu
          </Text>
          <Text
            style={[
              styles.fontWeight700,
              { fontSize: 12, color: 'blue', marginLeft: 10 },
            ]}>
            {' '}
            Xem tại đây
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 220,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.containerCoup}>
          <View style={styles.colorBox} />
          <Text style={styles.textCoup}>Mã giảm giá</Text>
        </View>

        <TouchableOpacity
          style={{
            width: 99,
            height: 45,
            backgroundColor: '#0A5EB7',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 2,
          }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 700 }}>
            Áp dụng
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content2}>
        <Text style={[styles.fontWeight700, { fontSize: 12, marginLeft: 15 }]}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text
          style={[
            styles.fontWeight700,
            { color: 'blue', fontSize: 12, marginLeft: 22 },
          ]}>
          Nhập tại đây?
        </Text>
      </View>

      <View style={styles.content2}>
        <Text style={[styles.fontWeight700, { fontSize: 18, marginLeft: 20 }]}>
          Tạm tính
        </Text>
        <Text
          style={[
            styles.fontWeight700,
            { color: 'red', fontSize: 18, marginLeft: 160 },
          ]}>
          {' '}
          {totalPrice.toLocaleString()} đ
        </Text>
      </View>

      <View style={styles.content3}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text
            style={[styles.fontWeight700, { fontSize: 18, marginLeft: -10 }]}>
            Thành tiền
          </Text>
          <Text
            style={[
              styles.fontWeight700,
              { color: 'red', fontSize: 18, marginLeft: 150 },
            ]}>
            {' '}
            {totalPrice.toLocaleString()} đ
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 331,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E53935',
            marginTop: 20,
          }}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: 'white' }}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    position: 'relative',
  },
  content1: {
    position: 'absolute',
    width: 372,
    height: 280,
    backgroundColor: 'white',
  },
  text12: {
    fontSize: 12,
  },
  fontWeight700: {
    fontWeight: 700,
  },
  redFont: {
    color: '#EE0D0D',
  },

  containerBtnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ccc',
    // padding: 10,
    borderRadius: 5,
    // marginHorizontal: 5,
    width: 14.22,
    height: 16,
    alignContent: 'center,',
  },
  buttonText: {
    // position:'absolute',
    fontSize: 12,
    // paddingLeft:2.5
  },
  count: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  containerCoup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000', // Màu viền
    borderRadius: 5, // Bo góc
    padding: 10, // Khoảng cách bên trong
    backgroundColor: 'white', // Màu nền
    width: 208,
    height: 45,
    marginLeft: 15,
  },
  colorBox: {
    width: 32, // Chiều rộng ô màu
    height: 16, // Chiều cao ô màu
    backgroundColor: 'yellow', // Màu ô
    marginRight: 10, // Khoảng cách giữa ô màu và chữ
  },
  textCoup: {
    fontSize: 16, // Kích thước chữ
    fontWeight: 'bold', // Đậm
    color: '#000', // Màu chữ
  },
  content2: {
    // position: 'absolute',
    width: 372,
    height: 51,
    backgroundColor: 'white',
    marginTop: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content3: {
    // position: 'absolute',
    width: 372,
    height: 120,
    backgroundColor: 'white',
    marginTop: 228,
    alignItems: 'center',
  },
});

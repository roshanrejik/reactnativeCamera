import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { useNavigation } from '@react-navigation/native';
export default function Camera() {
  const navigation = useNavigation();

  const [{ cameraRef }, { takePicture }] = useCamera(null);
  const captureHandle = async () => {
    try {
      const data = await takePicture();
      navigation.navigate('Home', { imageURI: data.uri });
    } catch (err) {
      console.log(err, 'l');
    }
  };
  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
      >
        <Button title="capture" onPress={() => captureHandle()} />
      </RNCamera>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
});

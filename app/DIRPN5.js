import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GestureHandler, { PinchGestureHandler } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

function DIRPN5() {
  const navigation = useNavigation();
  const [screenHeight, setScreenHeight] = useState(0);
  const [scale, setScale] = useState(new Animated.Value(1));

  const onPinchEvent = Animated.event([{ nativeEvent: { scale } }], { useNativeDriver: true });

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === 4) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 1,
      }).start();
    }
  };

  return (
    <ScrollView
    contentContainerStyle={styles.container}
      onContentSizeChange={(contentWidth, contentHeight) =>
        setScreenHeight(contentHeight)
      }
    >
    <PinchGestureHandler
        onGestureEvent={onPinchEvent}
        onHandlerStateChange={onPinchStateChange}>

        <Animated.View style={{ transform: [{ scale }] }}>
        <Image
            style={styles.image}
            source={require('./doc8.png')}
        />
        </Animated.View>
    </PinchGestureHandler>
    </ScrollView>
  );
}

export default DIRPN5;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  image: {
    width: 'deviceWidth', // Use '100%' to occupy the entire width
    justifyContent: 'center',

  },
});

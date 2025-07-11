import { Link, Stack } from "expo-router";
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  Text,
  TextInput,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

const { width, height } = Dimensions.get('screen');


export default function RootLayout() {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
    ],
  }));

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
    })
    .onUpdate((event) => {
      const maxTranslateX = width;
      const maxTranslateY = height;

      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX
      );
      translationY.value = clamp(
        prevTranslationY.value + event.translationY,
        -maxTranslateY,
        maxTranslateY
      );
    })
    .runOnJS(true);
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <View> */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
      <GestureDetector gesture={pan} >
        <Animated.View style={[animatedStyles, styles.box]}>
          <Text style={styles.title} >Hi Amila, How Can I help you...</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => console.log("jdfklsd")
            }
            value={'Type What ever you want...'}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
          <Link href={"/about_us"}>About us </Link>
          <Link href={"/"}>Home </Link>
        </Animated.View>
      </GestureDetector>
      {/* </View> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:'1rem',
  },
  box: {
    display: 'inline-flex',        // Use inline-flex to shrink-wrap
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b58df1',
    borderRadius: 20,
    width: 'fit-content',          // Optional: lets width match content
    height: 'fit-content',         // Optional: lets height match content
  },

  title: {
    color: 'white',
    fontWeight: 500,
  },
  input: {
    border: '1px solid white',
    padding: '1rem',
    borderRadius: '1rem',
    marginTop: '1rem',
    color: 'white'
  }

});

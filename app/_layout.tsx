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
import { SafeAreaView } from 'react-native-safe-area-context';

function clamp(val: number, min: number, max: number) {
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
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        {/* <Stack.Screen name="Products" component={ProductListScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} /> */}
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
          <Link href={"/products"}>products</Link>
          <Link href={"/"}>Home </Link>
        </Animated.View>
      </GestureDetector>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16, // instead of '1rem'
  },
  box: {
    position:'absolute',
    padding: 16, // instead of '1rem'
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b58df1',
    borderRadius: 20,
    bottom:0,
    right:50
  },
  title: {
    color: 'white',
    fontWeight: '500', // use string for fontWeight
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 16, // instead of '1rem'
    borderRadius: 16, // instead of '1rem'
    marginTop: 16, // instead of '1rem'
    color: 'white',
  }
});

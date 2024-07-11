import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo"
import * as SecureStore from 'expo-secure-store';
import LoginScreen from "./../components/LoginScreen"

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  useFonts({
    'montserrat-regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-medium': require('./../assets/fonts/Montserrat-Medium.ttf'),
    'montserrat-bold': require('./../assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-light': require('./../assets/fonts/Montserrat-Light.ttf')
  })
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
      <Stack screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="(tabs)"/>
      </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
    </ClerkProvider>
  );
}

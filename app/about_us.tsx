import { Text, View } from "react-native";

export default function AboutUs() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>About us</Text>
            <Text style={{ color: 'green' }}>Edit app/index.tsx to edit this screenIn React Native, the TextInput component does not have a browser-like "focus" state with CSS selectors (like :focus in web). Instead, you control the style of the TextInput based on its focus state using component state.
                To remove the border when the TextInput is focused, you need to:
                Track the focus state with a useState hook.
                Change the style of the TextInput based on whether it is focused.
                Here’s how you can do it:.</Text>
        </View>
    );
}
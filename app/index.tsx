import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color:'green'}}>Edit app/index.tsx to edit this screenIn React Native, the TextInput component does not have a browser-like "focus" state with CSS selectors (like :focus in web). Instead, you control the style of the TextInput based on its focus state using component state.
To remove the border when the TextInput is focused, you need to:
Track the focus state with a useState hook.
Change the style of the TextInput based on whether it is focused.
Here’s how you can do it:
Add a state variable, e.g., isFocused, using useState.
Use the onFocus and onBlur props of TextInput to update this state.
Conditionally apply a style that removes the border when isFocused is true.
Also, note that your current style uses web CSS (e.g., '1rem', '1px solid white'), which is not valid in React Native. You should use numbers for dimensions and border properties..</Text>
    </View>
  );
}

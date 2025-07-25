import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					title: "Home",
					headerStyle: {
						backgroundColor: "#f4511e",
					},
					headerTitleAlign: "center",
					headerBackTitle: "Back",
				}}
			/>
			<Stack.Screen
				name='about'
				options={{
					title: "About",
					headerBackTitle: "Back",
					headerBackTitleStyle: { fontSize: 30 },
				}}
			/>
			<Stack.Screen
				name='contact'
				options={{ title: "Contact", headerShown: false }}
			/>
		</Stack>
	);
};

export default RootLayout;

const styles = StyleSheet.create({});

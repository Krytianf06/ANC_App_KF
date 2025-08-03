import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";

const RootLayout = () => {
	const colotSchema = useColorScheme();
	console.log(colotSchema);
	const theme = Colors[colotSchema] ?? Colors.light;

	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: theme.navBackground },
				headerTitleAlign: "center",
				headerBackTitle: "Back2",
				headerTintColor: theme.title,
			}}>
			<Stack.Screen
				name='index'
				options={{
					title: "Home",
					// headerStyle: {
					// 	backgroundColor: "#f4511e",
					// },
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

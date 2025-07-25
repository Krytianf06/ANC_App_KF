import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const Home = () => {
	return (
		<View style={styles.container}>
			<Text>Strona domowe</Text>
			<Link href='/details'>szczegóły</Link>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
});

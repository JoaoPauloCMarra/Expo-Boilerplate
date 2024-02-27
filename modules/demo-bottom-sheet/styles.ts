import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		gap: 8,
		paddingHorizontal: 4
	},
	centerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 8
	},
	title: {
		marginBottom: 4,
		fontSize: 20,
		fontWeight: 'bold'
	},
	bottomSheetContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottomSheetTitle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	circle: {
		marginTop: 8,
		width: 32,
		height: 32,
		borderRadius: 16,
		backgroundColor: 'slategray'
	},
	buttonContainer: {
		marginTop: 8
	}
});

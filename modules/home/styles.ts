import { StyleSheet } from 'react-native';
import { StyleSheetBorderRadius, styleSheetShadows } from '@/lib/constants';

export default StyleSheet.create({
	keyBoardAvoidContainer: {
		flex: 1
	},
	content: {
		flex: 1,
		gap: 32,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 'auto',
		paddingHorizontal: 32
	},
	scrollView: {
		flex: 1,
		width: '100%',
		minHeight: 80,
		maxWidth: 256,
		marginVertical: 8
	},
	scrollViewContent: {
		alignItems: 'center',
		marginBottom: 16,
		flex: 1,
		width: '100%',
		maxWidth: 256,
		gap: 16
	},
	languageSwitcher: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 4
	},
	linearGradientContainer: {
		height: 160,
		marginVertical: 16,
		borderRadius: StyleSheetBorderRadius.medium,
		overflow: 'hidden',
		width: '100%'
	},
	svgContainer: {
		marginVertical: 16,
		padding: 8,
		width: 128,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
		borderRadius: StyleSheetBorderRadius.medium,
		backgroundColor: '#CBD5E1'
	},
	thunderIcon: {
		width: 64,
		height: 64,
		...styleSheetShadows.small
	},
	form: {
		width: '100%',
		gap: 4
	},
	post: {
		marginVertical: 8,
		borderRadius: StyleSheetBorderRadius.medium,
		borderWidth: 1,
		paddingHorizontal: 8,
		paddingVertical: 4
	},
	nav: {
		width: '100%',
		minHeight: 80,
		marginVertical: 16
	},
	navContent: {
		flex: 1,
		width: '100%',
		gap: 16
	}
});

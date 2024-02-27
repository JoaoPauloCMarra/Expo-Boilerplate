import { isDevice } from 'expo-device';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheetBorderRadius, styleSheetShadows } from '@/lib/constants';
import Button from '@/components/button';
import ThunderIcon from '@/components/icons/thunder-icon';
import Input from '@/components/input';
import KeyBoardAvoidContainer from '@/components/keyboard-avoid-container';
import PageContainer from '@/components/page-container';
import Text from '@/components/text';
import useTranslations from '@/hooks/use-translations';
import useHomePage from './useHomePage';

const styles = StyleSheet.create({
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
	languageSwitcher: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 4
	},
	linearGradientContainer: {
		height: 160,
		borderRadius: StyleSheetBorderRadius.medium,
		overflow: 'hidden',
		width: '100%'
	},
	svgContainer: {
		padding: 8,
		width: 128,
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
	scrollView: {
		flex: 1,
		width: '100%',
		minHeight: 80,
		maxWidth: 256,
		marginVertical: 8
	},
	scrollViewContainer: {
		marginBottom: 16,
		flex: 1,
		width: '100%',
		maxWidth: 256,
		gap: 16
	}
});

const HomeScreen = () => {
	const { locale, t } = useTranslations();
	const {
		sampleText,
		inputPostId,
		post,
		postsError,
		postsAreFetching,

		onSwitchLocale,
		onIdInputChange,
		onApiCallPress
	} = useHomePage();

	return (
		<PageContainer>
			<KeyBoardAvoidContainer style={styles.keyBoardAvoidContainer} behavior="position">
				<View style={styles.content}>
					<Text size="2xl">Onboarding</Text>
					<View>
						<Text size="lg">{t('General.appName')}</Text>
						<View style={styles.languageSwitcher}>
							<Button
								variant={locale === 'en' ? 'primary' : 'secondary'}
								onPress={() => onSwitchLocale('en')}
							>
								EN
							</Button>
							<Button
								variant={locale === 'pt' ? 'primary' : 'secondary'}
								onPress={() => onSwitchLocale('pt')}
							>
								PT
							</Button>
						</View>
					</View>
					<View style={styles.linearGradientContainer}>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							colors={['rgb(6,25,49)', 'rgb(14,64,110)', 'rgb(152,165,193)']}
							style={{ flex: 1 }}
						/>
					</View>
					<Text size="lg">{`Is this a real device? ${isDevice ? 'yes' : 'no'}`}</Text>
					<Text size="lg">{String(sampleText)}</Text>
					<View style={styles.svgContainer}>
						<Text size="sm">svg rendered</Text>
						<ThunderIcon style={styles.thunderIcon} fill="#fbbf24" stroke="#f59e0b" />
					</View>

					<View style={styles.form}>
						<Input
							keyboardType="numeric"
							returnKeyType="done"
							placeholder="Post ID"
							value={inputPostId ? String(inputPostId) : ''}
							onChangeText={onIdInputChange}
							onReturnPressed={onApiCallPress}
						/>
						<Button onPress={onApiCallPress}>{`API Call for ${String(inputPostId)}`}</Button>
					</View>

					<ScrollView
						style={styles.scrollView}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						bounces={false}
						contentContainerStyle={styles.scrollViewContainer}
					>
						{postsAreFetching ? <Text>loading...</Text> : null}
						{!postsAreFetching && postsError ? (
							<Text>{JSON.stringify(postsError, null, 2)}</Text>
						) : null}
						{!postsAreFetching && post.id ? (
							<View key={post.id}>
								{/* className="my-2 rounded-lg border px-2 py-1" */}
								<Text>{post.title}</Text>
							</View>
						) : null}
					</ScrollView>
				</View>
			</KeyBoardAvoidContainer>
		</PageContainer>
	);
};

export default HomeScreen;

/* 
							

						<View className="flex w-full flex-1 items-center">
							<View className="flex w-full max-w-64 flex-col gap-4">
								<Button
									className="w-full"
									onPress={() => router.replace('/404/')}
									variant="destructive"
								>
									Try the 404 page
								</Button>
								<Button
									className="w-full"
									onPress={() => router.replace('/error/')}
									variant="destructive"
								>
									Try the error page
								</Button>
								<Button
									className="w-full"
									onPress={() => router.replace('/form/')}
									variant="secondary"
								>
									Try the demo form
								</Button>
								<Button
									className="w-full"
									onPress={() => router.replace('/camera/')}
									variant="successful"
								>
									Try the Camera demo
								</Button>
								<Button
									className="w-full"
									onPress={() => router.replace('/image-picker/')}
									variant="successful"
								>
									Try the Image Picker demo
								</Button>
								<Button
									className="w-full"
									onPress={() => router.replace('/tabs/')}
									variant="outline"
								>
									Try the Tabs demo
								</Button>
								<Button
									className="w-full"
									onPress={() => router.replace('/bottom-sheet/')}
									variant="outline"
								>
									Try the Bottom Sheet demo
								</Button>
								<Button className="w-full" onPress={() => router.replace('/slider/')}>
									Try the Slider demo
								</Button>
							</View>
						</View>
					</ScrollView>
				*/

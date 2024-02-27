import { isDevice } from 'expo-device';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { colorPalette, styleSheetShadows } from '@/lib/constants';
import Button from '@/components/button';
import ThunderIcon from '@/components/icons/thunder-icon';
import KeyBoardAvoidContainer from '@/components/keyboard-avoid-container';
import PageContainer from '@/components/page-container';
import Text from '@/components/text';
import useTranslations from '@/hooks/use-translations';
import useHomePage from './useHomePage';

const styles = StyleSheet.create({
	keyBoardAvoidContainer: {
		flex: 1,
		backgroundColor: colorPalette.background
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
		width: '100%'
	},
	svgContainer: {
		padding: 8,
		width: 128,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
		borderRadius: 16,
		backgroundColor: '#999'
	},
	thunderIcon: {
		width: 64,
		height: 64,
		...styleSheetShadows.medium
	}
});

const HomeScreen = () => {
	const { locale, t } = useTranslations();
	const {
		sampleText,
		// inputPostId,
		// post,
		// postsError,
		// postsAreFetching,

		onSwitchLocale
		// onIdInputChange,
		// onApiCallPress
	} = useHomePage();

	return (
		<PageContainer>
			<KeyBoardAvoidContainer style={styles.keyBoardAvoidContainer}>
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
					{/* 
					
					
					<View className="mt-2 flex size-32 items-center justify-center gap-4 rounded-lg bg-slate-400">
						<Text className="text-xs text-slate-800">svg rendered</Text>
						<ThunderIcon className="ios:shadow-md android:shadow-md size-12 fill-amber-400 stroke-amber-500 web:drop-shadow-md" />
					</View>
					<View className="w-full items-center">
						<LinearGradientRect
							className="my-4 size-10"
							colors={['rgba(0,0,0,0.8)', 'transparent']}
						/>
					</View>
					<ScrollView
						className="my-2 min-h-20 w-full max-w-64 flex-1"
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						bounces={false}
					>
						<View className="mb-4 flex w-full max-w-64 gap-4">
							<Input
								keyboardType="numeric"
								returnKeyType="done"
								placeholder="Post ID"
								value={inputPostId ? String(inputPostId) : ''}
								onChangeText={onIdInputChange}
								onReturnPressed={onApiCallPress}
							/>
							<Button
								className="w-full"
								onPress={onApiCallPress}
							>{`API Call for ${String(inputPostId)}`}</Button>
							{postsAreFetching ? <Text>loading...</Text> : null}
							{!postsAreFetching && postsError ? (
								<Text>{JSON.stringify(postsError, null, 2)}</Text>
							) : null}
							{!postsAreFetching && post.id ? (
								<View key={post.id} className="my-2 rounded-lg border px-2 py-1">
									<Text>{post.title}</Text>
								</View>
							) : null}
						</View>
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
				*/}
				</View>
			</KeyBoardAvoidContainer>
		</PageContainer>
	);
};

export default HomeScreen;

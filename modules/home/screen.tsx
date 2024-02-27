import { isDevice } from 'expo-device';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '@/components/button';
import ThunderIcon from '@/components/icons/thunder-icon';
import Input from '@/components/input';
import KeyBoardAvoidContainer from '@/components/keyboard-avoid-container';
import PageContainer from '@/components/page-container';
import Text from '@/components/text';
import useTranslations from '@/hooks/use-translations';
import styles from './styles';
import useHomePage from './useHomePage';

const HomeScreen = () => {
	const router = useRouter();
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
					<ScrollView
						style={styles.scrollView}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						bounces={false}
					>
						<View style={styles.scrollViewContent}>
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

							{postsAreFetching ? <Text>loading...</Text> : null}
							{!postsAreFetching && postsError ? (
								<Text>{JSON.stringify(postsError, null, 2)}</Text>
							) : null}
							{!postsAreFetching && post.id ? (
								<View key={post.id} style={styles.post}>
									<Text>{post.title}</Text>
								</View>
							) : null}
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

						<View style={styles.nav}>
							<View style={styles.navContent}>
								<Button onPress={() => router.replace('/404/')} variant="destructive">
									Try the 404 page
								</Button>
								<Button onPress={() => router.replace('/error/')} variant="destructive">
									Try the error page
								</Button>
								<Button onPress={() => router.replace('/form/')} variant="secondary">
									Try the demo form
								</Button>
								<Button onPress={() => router.replace('/camera/')} variant="successful">
									Try the Camera demo
								</Button>
								<Button onPress={() => router.replace('/image-picker/')} variant="successful">
									Try the Image Picker demo
								</Button>
								<Button onPress={() => router.replace('/tabs/')} variant="outline">
									Try the Tabs demo
								</Button>
								<Button onPress={() => router.replace('/bottom-sheet/')} variant="outline">
									Try the Bottom Sheet demo
								</Button>
								<Button onPress={() => router.replace('/slider/')}>Try the Slider demo</Button>
							</View>
						</View>
					</ScrollView>
				</View>
			</KeyBoardAvoidContainer>
		</PageContainer>
	);
};

export default HomeScreen;

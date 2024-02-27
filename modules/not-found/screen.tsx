import { memo } from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Button from '@/components/button';
import PageContainer from '@/components/page-container';
import Text from '@/components/text';

const NotFoundScreen = () => (
	<PageContainer>
		<Stack.Screen options={{ title: 'Oops!' }} />
		<View style={styles.container}>
			<Text size="2xl">This screen doesn't exist.</Text>
			<Link href="/" asChild>
				<Button variant="link">Go to home screen!</Button>
			</Link>
		</View>
	</PageContainer>
);

export default memo(NotFoundScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	}
});

import { memo } from 'react';
import { type ErrorBoundaryProps, router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Button from './button';
import PageContainer from './page-container';
import Text from './text';

type Props = Omit<ErrorBoundaryProps, 'retry'> & {
	retry?: ErrorBoundaryProps['retry'];
};

const ErrorBoundary = (props: Props) => (
	<PageContainer>
		<View style={styles.container}>
			<Text variant="destructive" size="xl">
				{String(props.error.message)}
			</Text>
			<View style={styles.actions}>
				<Button onPress={props.retry} variant="destructive" size="lg">
					Retry
				</Button>
				<Text>or</Text>
				<Button variant="outline" size="lg" onPress={() => router.replace('/')}>
					Go to the Home Screen
				</Button>
			</View>
		</View>
	</PageContainer>
);

export default memo(ErrorBoundary);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 16
	},
	actions: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: 16
	}
});

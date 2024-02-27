import type { PropsWithChildren } from 'react';
import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PageContainer = (props: PropsWithChildren) => {
	return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default memo(PageContainer);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 'auto',
		width: '100%'
	}
});

import { useState } from 'react';
import { Link } from 'expo-router';
import { View } from 'react-native';
import BottomSheet from '@/components/bottom-sheet';
import Button from '@/components/button';
import PageContainer from '@/components/page-container';
import Text from '@/components/text';
import styles from './styles';

const DemoBottomSheet = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<PageContainer>
				<View style={styles.container}>
					<View style={styles.centerContainer}>
						<Text style={styles.title}>Demo Sheet</Text>
						<Link href="/" asChild>
							<Button variant="outline" size="lg">
								Go to the Home Screen
							</Button>
						</Link>
					</View>
					<View>
						<Button onPress={() => setShowModal(true)}>Open Bottom Sheet</Button>
					</View>
				</View>
			</PageContainer>

			<BottomSheet visible={showModal} onClose={() => setShowModal(false)}>
				<View style={styles.bottomSheetContainer}>
					<Text style={styles.bottomSheetTitle}>Bottom Sheet Demo</Text>
					<View style={styles.circle} />
					<View style={styles.circle} />
					<View style={styles.buttonContainer}>
						<Button onPress={() => setShowModal(false)}>Close</Button>
					</View>
				</View>
			</BottomSheet>
		</>
	);
};

export default DemoBottomSheet;

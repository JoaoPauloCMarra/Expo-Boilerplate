import { useRef, useState } from 'react';
import { Camera, CameraType, ImageType } from 'expo-camera';
import { isDevice } from 'expo-device';
import { Link } from 'expo-router';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { StyleSheetBorderRadius, colorPalette, isExpoGo } from '@/lib/constants';
import { vibrate } from '@/lib/utils';
import Button from '@/components/button';
import ErrorBoundary from '@/components/error-boundary';
import PageContainer from '@/components/page-container';
import Text from '@/components/text';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 32
	},
	title: {
		marginBottom: 16,
		textAlign: 'center'
	},
	content: {
		flex: 1,
		padding: 16
	},
	cameraContainer: {
		flex: 1,
		overflow: 'hidden',
		borderRadius: StyleSheetBorderRadius.medium,
		backgroundColor: 'black'
	},
	cameraLoadingContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		height: '100%',
		width: '100%'
	},
	cameraToolbar: {
		position: 'absolute',
		bottom: 4,
		right: 4,
		gap: 4,
		zIndex: 10
	},
	camera: {
		flex: 1,
		width: '100%',
		height: '100%'
	}
});

const DemoCamera = () => {
	const [cameraReady, setCameraReady] = useState(false);
	const [type, setType] = useState(CameraType.back);
	const [picture, setPicture] = useState<string | null>(null);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const cameraRef = useRef<Camera>(null);

	if (!isExpoGo && !isDevice) {
		return <ErrorBoundary error={Error('This screen only works on a real device')} />;
	}

	function toggleCameraType() {
		vibrate();
		setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
	}

	function snapPhoto() {
		if (!cameraRef.current) return;
		vibrate();
		cameraRef.current.takePictureAsync({
			imageType: ImageType.jpg,
			quality: 1,
			// skipProcessing: true,
			scale: 1,
			onPictureSaved: ({ uri }) => setPicture(uri)
		});
	}

	if (permission?.status !== 'granted') {
		requestPermission();
	}

	return (
		<PageContainer>
			<View style={styles.container}>
				<Text style={styles.title} size="2xl" bold>
					{`Camera Demo | Permission: ${permission?.status}`}
				</Text>
				<Link href="/" asChild>
					<Button variant="outline" size="lg">
						Go to the Home Screen
					</Button>
				</Link>
			</View>
			<View style={styles.content}>
				<View style={styles.cameraContainer}>
					{!cameraReady ? (
						<View style={styles.cameraLoadingContainer}>
							<ActivityIndicator size="large" color={colorPalette.accent} />
						</View>
					) : null}
					<Camera
						ref={cameraRef}
						type={type}
						onCameraReady={() => setCameraReady(true)}
						style={[styles.camera, { opacity: !cameraReady ? 0 : 1 }]}
					></Camera>
					{picture ? (
						<View className="relative size-full bg-black/50">
							<View className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border-2 border-primary">
								<View className="size-80 bg-background shadow">
									<Image source={{ uri: picture }} className="size-full" resizeMode="cover" />
									<View className="absolute right-1 top-1">
										<Button onPress={() => setPicture(null)}>close</Button>
									</View>
								</View>
							</View>
						</View>
					) : null}
					{cameraReady ? (
						<View style={styles.cameraToolbar}>
							<Button onPress={toggleCameraType} variant="secondary">
								Flip Camera
							</Button>
							<Button onPress={snapPhoto} variant="secondary">
								Snap Photo
							</Button>
						</View>
					) : null}
				</View>
			</View>
		</PageContainer>
	);
};

export default DemoCamera;

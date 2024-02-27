import { isWeb } from './constants';

export async function vibrate(feedback?: 'light' | 'medium' | 'heavy'): Promise<void> {
	if (isWeb) return;
	const haptics = require('expo-haptics');
	return haptics.impactAsync(feedback ?? 'medium');
}

import '@testing-library/react-native/extend-expect';

import { setUpTests } from 'react-native-reanimated';

setUpTests();

global.fetch = jest.fn(() => new Promise((resolve) => resolve()));

jest.mock('expo-font');
jest.mock('expo-asset');

jest.mock('expo-constants', () => ({
	appOwnership: 'standalone'
}));

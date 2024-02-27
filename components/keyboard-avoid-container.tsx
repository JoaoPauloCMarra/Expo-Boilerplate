import { memo } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import type { KeyboardAvoidingViewProps } from 'react-native';

const KeyBoardAvoidContainer = (props: KeyboardAvoidingViewProps) => (
	<KeyboardAvoidingView
		{...props}
		style={[{ flex: 1 }, props.style]}
		behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
	/>
);

export default memo(KeyBoardAvoidContainer);

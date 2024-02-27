import type { Ref } from 'react';
import { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colorPalette, defaultHitSlop } from '@/lib/constants';
import Text from './text';
import type { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
	variant?: 'primary' | 'secondary' | 'successful' | 'destructive' | 'outline' | 'ghost' | 'link';
	size?: 'sm' | 'md' | 'lg' | 'icon';
};

const Button = forwardRef(
	({ children, variant = 'primary', size = 'md', ...props }: Props, ref: Ref<View>) => (
		<TouchableOpacity {...props} style={[styles.base, styles[variant], styles[size], props.style]}>
			<View ref={ref} hitSlop={defaultHitSlop}>
				<Text style={[textStyles[variant], textStyles[size]]}>{String(children)}</Text>
			</View>
		</TouchableOpacity>
	)
);
Button.displayName = 'Button';

export default Button;

const styles = StyleSheet.create({
	base: {
		flexShrink: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		backgroundColor: 'transparent',
		zIndex: 10
	},
	primary: {
		backgroundColor: colorPalette.primary
	},
	secondary: {
		backgroundColor: colorPalette.secondary
	},
	successful: {
		backgroundColor: colorPalette.successful
	},
	destructive: {
		backgroundColor: colorPalette.destructive
	},
	outline: {
		borderColor: colorPalette.primary,
		borderWidth: 1
	},
	ghost: {
		borderWidth: 0
	},
	link: {
		borderWidth: 0
	},
	sm: {
		height: 42,
		paddingHorizontal: 16
	},
	md: {
		height: 48,
		paddingHorizontal: 20
	},
	lg: {
		height: 56,
		paddingHorizontal: 24
	},
	icon: {
		height: 40,
		width: 40,
		padding: 0
	}
});

const textStyles = StyleSheet.create({
	base: {
		fontSize: 16,
		fontWeight: '600'
	},
	primary: {
		color: colorPalette.background
	},
	secondary: {
		color: colorPalette.background
	},
	successful: {
		color: colorPalette.background
	},
	destructive: {
		color: colorPalette.background
	},
	outline: {
		color: colorPalette.primary
	},
	ghost: {
		color: colorPalette.foreground
	},
	link: {
		color: colorPalette.foreground
	},
	sm: {},
	md: {},
	lg: {},
	icon: {}
});

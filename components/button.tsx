import type { Ref } from 'react';
import { forwardRef, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { StyleSheetBorderRadius, colorPalette, defaultHitSlop } from '@/lib/constants';
import Text from './text';
import type { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
	variant?: 'primary' | 'secondary' | 'successful' | 'destructive' | 'outline' | 'ghost' | 'link';
	size?: 'sm' | 'md' | 'lg' | 'icon';
};

const Button = forwardRef(
	({ children, variant = 'primary', size = 'md', ...props }: Props, ref: Ref<View>) => {
		const flattenStyle = useMemo(
			() => StyleSheet.flatten([styles.base, styles[variant], styles[size], props.style]),
			[props.style, size, variant]
		);

		return (
			<TouchableOpacity {...props} style={flattenStyle}>
				<View ref={ref} hitSlop={defaultHitSlop}>
					<Text bold style={textStyles[variant]} size="md">
						{String(children)}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
);
Button.displayName = 'Button';

export default Button;

const styles = StyleSheet.create({
	base: {
		flexShrink: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: StyleSheetBorderRadius.small,
		backgroundColor: colorPalette.transparent,
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
	primary: {
		color: colorPalette['primary-foreground']
	},
	secondary: {
		color: colorPalette['secondary-foreground']
	},
	successful: {
		color: colorPalette['successful-foreground']
	},
	destructive: {
		color: colorPalette['destructive-foreground']
	},
	outline: {
		color: colorPalette.primary
	},
	ghost: {
		color: colorPalette.foreground
	},
	link: {
		color: colorPalette.foreground
	}
});

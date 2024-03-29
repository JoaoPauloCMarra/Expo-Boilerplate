import { useMemo } from 'react';
import { Span, P, A, H1, H2, H3, H4 } from '@expo/html-elements';
import { StyleSheet, type TextProps } from 'react-native';
import { colorPalette } from '@/lib/constants';

const allowedComponents = {
	span: Span,
	p: P,
	a: A,
	label: Span, // TODO: replace with upcoming Label from the package
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4
};

export type Props = TextProps & {
	children: string | JSX.Element;
	textProps?: TextProps;
	as?: keyof typeof allowedComponents;
	variant?: 'primary' | 'secondary' | 'successful' | 'destructive' | 'light';
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
};

const Text = (props: Props) => {
	const { variant = 'primary', size = 'md', as = 'span', bold, italic, underline } = props;
	const Component = allowedComponents[as];
	const flattenStyle = useMemo(
		() =>
			StyleSheet.flatten([
				styles.base,
				styles[variant],
				styles[size],
				bold && styles.bold,
				italic && !bold && styles.italic,
				italic && bold && styles.italicBold,
				underline && styles.underline,
				props.style
			]),
		[bold, italic, props.style, size, underline, variant]
	);

	return <Component {...props} style={flattenStyle} />;
};

export default Text;

const styles = StyleSheet.create({
	base: {
		fontFamily: 'Montserrat-Regular',
		fontWeight: 'normal'
	},
	bold: {
		fontFamily: 'Montserrat-SemiBold'
	},
	italic: {
		fontFamily: 'Montserrat-Italic'
	},
	italicBold: {
		fontFamily: 'Montserrat-SemiBoldItalic'
	},
	underline: {
		textDecorationLine: 'underline'
	},
	primary: {
		color: colorPalette.foreground
	},
	secondary: {
		color: colorPalette.secondary
	},
	successful: {
		color: colorPalette.successful
	},
	destructive: {
		color: colorPalette.destructive
	},
	light: {
		color: colorPalette.background
	},
	sm: {
		fontSize: 14
	},
	md: {
		fontSize: 16
	},
	lg: {
		fontSize: 18
	},
	xl: {
		fontSize: 24
	},
	'2xl': {
		fontSize: 28
	},
	'3xl': {
		fontSize: 32
	}
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f6f6f6',
		padding: 15
	},

	logoContainer: {
		marginBottom: 20
	},

	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#3d3d4e',
		marginBottom: 8
	},

	subheading: {
		fontSize: 16,
		color: '#666',
		textAlign: 'center',
		marginBottom: 8
	},

	inputGroup: {
		width: '100%'
	},

	label: {
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#1a1a1a'
	},

	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 1.5,
		borderColor: '#E8E8E8',
		borderRadius: 25,
		paddingHorizontal: 15,
		height: 55,
		marginBottom: 8,
		gap: 5
	},

	inputFocused: {
		borderColor: '#85c900',
		borderWidth: 2
	},

	input: {
		flex: 1,
		fontSize: 16,
		color: '#333'
	},

	btn: {
		width: '100%',
		backgroundColor: '#85c900',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 5,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 25,
		marginTop: 10
	},

	btnText: {
		color: '#f4f4f4',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	},

	socialGroup: {
		flexDirection: 'row',
		gap: 8,
		marginTop: 30
	},

	socialIconWrapper: {
		backgroundColor: '#fff',
		borderColor: '#E8E8E8',
		borderWidth: 2,
		borderRadius: 15,
		width: 50,
		height: 50,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},

	footer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},

	footerText: {
		color: '#7C7C7C',
		fontSize: 15
	},

	footerLink: {
		color: '#85c900',
		fontSize: 16,
		fontWeight: 'bold'
	},

	singUpLinkContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5
	},

	forgotContainer: {
		marginTop: 5
	}
});

export default styles;

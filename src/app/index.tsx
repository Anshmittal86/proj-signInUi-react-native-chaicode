import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../components/SignIn.styles';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [focusedInput, setFocusedInput] = useState(null);

	return (
		<View style={styles.container}>
			{/* LOGO  */}
			<View style={styles.logoContainer}>
				<MaterialCommunityIcons name="plus-circle-outline" size={60} color="#85C900" />
			</View>

			{/* Heading and Subheading  */}
			<Text style={styles.heading}>Sign In</Text>
			<Text style={styles.subheading}>Let's experience the joy of telecare AI.</Text>

			{/* Email Input */}
			<View style={styles.inputGroup}>
				<Text style={styles.label}>Email Address</Text>
				<View style={[styles.inputWrapper, focusedInput == 'email' && styles.inputFocused]}>
					<MaterialCommunityIcons name="email-outline" size={20} color="#666" />
					<TextInput
						style={styles.input}
						placeholder="Enter your email"
						value={email}
						onChangeText={setEmail}
						onFocus={() => setFocusedInput('email')}
						onBlur={() => setFocusedInput(null)}
					/>
				</View>
			</View>

			{/* Password Input */}
			<View style={styles.inputGroup}>
				<Text style={styles.label}>Password</Text>
				<View style={[styles.inputWrapper, focusedInput == 'password' && styles.inputFocused]}>
					<MaterialCommunityIcons name="email-outline" size={20} color="#666" />
					<TextInput
						style={styles.input}
						placeholder="Enter your password"
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
						onFocus={() => setFocusedInput('password')}
						onBlur={() => setFocusedInput(null)}
					/>
				</View>
			</View>

			{/* Sign In  */}
			<Pressable style={styles.btn}>
				<Text style={styles.btnText}>Sign In</Text>
				<MaterialCommunityIcons name="arrow-right" size={20} color="#f4f4f4" />
			</Pressable>

			{/* Social Login Options  */}
			<View style={styles.socialGroup}>
				<View style={styles.socialIconWrapper}>
					<MaterialCommunityIcons name="facebook" size={20} color="#666" />
				</View>

				<View style={styles.socialIconWrapper}>
					<MaterialCommunityIcons name="google" size={20} color="#666" />
				</View>

				<View style={styles.socialIconWrapper}>
					<MaterialCommunityIcons name="instagram" size={20} color="#666" />
				</View>
			</View>

			{/* Footer Links  */}
			<View style={styles.footer}>
				<View style={styles.singUpLinkContainer}>
					<Text style={styles.footerText}>Don't have an account?</Text>
					<TouchableOpacity>
						<Text style={styles.footerLink}>Sign Up</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity style={styles.forgotContainer}>
					<Text style={styles.footerLink}>Forgot Password?</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SignIn;

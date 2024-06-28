import React, { useState } from "react"
import { Alert, TouchableWithoutFeedback, Keyboard, Text } from "react-native"
import { Button } from "../../components/Button"
import { Container, Input } from "./style"
import { supabase } from "../../utils/supabase"

export function Login({ navigation } :any) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [ loading, setLoading ] = useState(false);

	async function handleLogin() {
    setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		})

		if (error) Alert.alert(error.message);
    else navigation.navigate('Home');
    setLoading(false);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container>
				<Input
					placeholder="Digite seu e-mail"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
				/>
				<Input
					placeholder="Digite sua senha"
					value={password}
					onChangeText={setPassword}
					autoCapitalize="none"
					secureTextEntry={true}
				/>
				<Button title="Entrar" onPress={handleLogin} />
			</Container >
		</TouchableWithoutFeedback>
	)
}
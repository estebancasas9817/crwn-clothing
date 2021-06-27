import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>Ya tengo una cuenta</h2>
				<span>Iniciar sesión con correo electrónico y contraseña</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>

					<FormInput
						name='password'
						type='password'
						label='contraseña'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Iniciar sesión </CustomButton>
						<CustomButton
							type='button'
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Inicia sesión con Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;

import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link to='/tienda' className='option'>
				TIENDA
			</Link>
			<Link to='/contacto' className='option'>
				CONTACTO
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					CERRAR SESIÓN
				</div>
			) : (
				<Link className='option' to='/signin'>
					INICIAR SESIÓN
				</Link>
			)}
		</div>
	</div>
);

export default Header;

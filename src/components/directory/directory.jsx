import React from 'react';
import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: 'gorras',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1,
					linkUrl: 'tienda/gorras',
				},
				{
					title: 'chaquetas',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2,
					linkUrl: 'tienda/chaquetas',
				},
				{
					title: 'zapatos',
					imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					id: 3,
					linkUrl: 'tienda/zapatos',
				},
				{
					title: 'mujeres',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					size: 'large',
					id: 4,
					linkUrl: 'tienda/mujeres',
				},
				{
					title: 'hombres',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					size: 'large',
					id: 5,
					linkUrl: 'tienda/hombres',
				},
			],
		};
	}

	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}
export default Directory;

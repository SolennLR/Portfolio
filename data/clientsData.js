import { v4 as uuidv4 } from 'uuid';

// Import images
import FSBImage from '../public/images/brands/FSB.png';


export const clientsHeading = 'Certains clients avec lesquels j\'ai travaillé';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'FSB',
		img: FSBImage,
		lien: 'https://bretagne.familles-solidaires.com/',
	},
];

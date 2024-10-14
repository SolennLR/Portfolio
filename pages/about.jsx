import { motion } from 'framer-motion';
import AboutClients from '../components/about/AboutClients';
import AboutMeBio from '../components/about/AboutMeBio';
import AboutHardSkills from '../components/about/AboutHardSkills';

function about() {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutHardSkills />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</div>
	);
}

export default about;

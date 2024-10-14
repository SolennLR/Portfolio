import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title='Solenn LE ROUZIC'
						   keywords={"Solenn LE ROUZIC, Concepteur Développeur d\'applications Web / Desktop / Mobile, Développeur Full-Stack, Portfolio, Java, PHP, Symfony, Javascript, Node, Vue, React, Bootstrap, Tailwind CSS, PostgreSql, MariaDB, MySQL"}
						   description={"Voici le portfolio de Solenn LE ROUZIC - Conceptrice Développeuse d\'applications Web / Desktop / Mobile - Développeuse Full-Stack. Retraçant mon parcours et la direction dans laquelle je vais. Vous y trouverez mes projets, mes compétences, mon CV et mes coordonnées."}
			/>

			<AppBanner />

			<ProjectsGrid />

			<div className="mt-10 sm:mt-15 flex justify-center">
				<div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
					<Link href="/projects" aria-label="More Projects" passHref>
						<Button title="Plus de projets" />
					</Link>
				</div>
			</div>
		</div>
	);
}

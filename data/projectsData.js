import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Scrapping',
		url: '',
		category: 'Application desktop',
		img: '/images/scrapping/143838.jpg',
		ProjectHeader: {
			title: 'Scrapping',
			publishDate: 'Décembre 2023',
			tags: 'Application desktop',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Scrapping',
				img: '/images/scrapping/143838.jpg',
			},
			{
				id: uuidv4(),
				title: 'Scrapping',
				img: '/images/scrapping/projet2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Scrapping',
				img: '/images/scrapping/projet3.jpg',
			},
		],
		ProjectInfo: {
			//ClientHeading: 'À propos du client',
			//CompanyInfo: [
			//	{
			//		id: uuidv4(),
			//		title: 'Nom',
			//		details: 'Company Ltd',
			//	},
			//	{
			//		id: uuidv4(),
			//		title: 'Services',
			//		details: 'Web Development',
			//	},
			//	{
			//		id: uuidv4(),
			//		title: 'Site web',
			//		details: 'https://company.com',
			//	},
			//	{
			//		id: uuidv4(),
			//		title: 'Téléphone',
			//		details: '555 8888 888',
			//	},
			//],
			ObjectivesHeading: 'Objectif',
			ObjectivesDetails:
				"Créer une application permettant de collecter et stocker des données immobilières en ligne via un processus de web scraping " +
				"et de les organiser dans une base de données.",
			Technologies: [
				{
					title: 'Outils et technologies',
					techs: [
						'Langages de programmation : JAVA',
						'Outils de build : Maven',
						'Gestion des dépendances : Maven',
						'Interface utilisateur : JavaFX',
						'Connexion à la base de données : JDBC MySQL',
						'Scrapping web : HTMLUnit',
						'Envoi de mails : Api Brevo',
						'Tests unitaires : JUnit',
						'Gestion des logs : Log4j',
						'Modélisation base de données : Looping',
						'Base de données : MySQL',
						'IDE : IntelliJ IDEA',
						'Containerisation : Docker',
						'Gestion des bases de données : PhpMyAdmin',
						'Gestion de version : Git',
						'Documentation : Javadoc',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'L\'architecture du projet semble être organisée selon une structure typique d\'une application Java utilisant des technologies modernes pour le développement, le scrapping web, et l\'envoi d\'emails. Voici un aperçu de l\'architecture du projet :  \n' +
						'1. Structure de l\'application\n' +
						'Packages : Le projet est organisé en plusieurs packages, chacun ayant une responsabilité spécifique, par exemple fr.cda.immobilier.utils pour les utilitaires, fr.cda.immobilier.modele.DAO pour les objets d\'accès aux données (DAO), etc.\n' +
						'Classes : Les classes sont bien définies avec des responsabilités claires, comme EmailTools pour la gestion des emails, DaoFactory pour la gestion des connexions et des DAO, etc.\n' +
						'3. Patrons de Conception\n' +
						'DAO (Data Access Object) : Utilisé pour l\'abstraction et la gestion des opérations de base de données.\n' +
						'Factory : Utilisé pour la création des instances de DAO (DaoFactory).\n' +
						'Singleton : Probablement utilisé pour la gestion de la configuration de l\'API Sendinblue.\n' +
						'4. Fonctionnalités Clés\n' +
						'Scrapping Web : Utilisation de HTMLUnit pour extraire des données de pages web.\n' +
						'Envoi d\'Emails : Utilisation de l\'API Sendinblue pour envoyer des emails avec des pièces jointes.\n' +
						'Gestion des Connexions : Utilisation de JDBC pour la connexion à la base de données MySQL.\n' +
						'5. Gestion des Exceptions\n' +
						'Les exceptions sont gérées de manière appropriée avec des blocs try-catch, et les erreurs sont journalisées à l\'aide de Log4j.\n' +
						'6. Multithreading\n' +
						'Utilisation de threads pour l\'envoi d\'emails (EmailTools implémente Runnable).\n' +
						'7. Configuration\n' +
						'Les configurations, telles que les clés d\'API et les chemins de fichiers, sont définies dans les classes appropriées.\n' +
						'Cette architecture modulaire et bien organisée permet une maintenance facile et une extensibilité de l\'application.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			//SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'SIMPLY A HOUSE',
		url: '',
		category: 'Application web',
		img: '/images/scrapping/projet4.jpg',
		ProjectHeader: {
			title: 'SIMPLY A HOUSE',
			publishDate: 'Décembre 2023',
			tags: 'Application web',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'SIMPLY A HOUSE',
				img: '/images/scrapping/projet4.jpg',
			},
			{
				id: uuidv4(),
				title: 'SIMPLY A HOUSE',
				img: '/images/scrapping/projet5.jpg',
			},
			{
				id: uuidv4(),
				title: 'SIMPLY A HOUSE',
				img: '/images/scrapping/projet6.jpg',
			},
		],
		ProjectInfo: {
			//ClientHeading: 'About Client',
			//CompanyInfo: [
			//	{
			//		id: uuidv4(),
			//		title: 'Name',
			//		details: 'Company Ltd',
			//	},
			//	{
			//		id: uuidv4(),
			//		title: 'Services',
			//		details: 'UI Design & Frontend Development',
			//	},
			//	{
			//		id: uuidv4(),
			//		title: 'Website',
			//		details: 'https://company.com',
			//	},
			//	{
			//		id: uuidv4(),
			//		title: 'Phone',
			//		details: '555 8888 888',
			//	},
			//],
			ObjectivesHeading: 'Objectif',
			ObjectivesDetails:
				'Afficher des données immobilières, stockées dans une base de données, sur un site web pour une consultation ultérieure.',
			Technologies: [
				{
					title: 'Outils et technologies',
					techs: [
						'Langages de programmation : JAVA',
						'Outils de build : Maven',
						'Gestion des dépendances : Maven',
						'Serveur de servlet : Apache Tomcat',
						'Base de données : MySQL',
						'Framework de test : JUnit 5',
						'API de servlets : Javax Servlet API',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'L\'architecture du projet est basée sur une application web Java utilisant le modèle MVC (Modèle-Vue-Contrôleur). Voici un aperçu des composants principaux :  \n' +
						'Modèle (Model) :  \n' +
						'Représente les données de l\'application et la logique métier.\n' +
						'Interagit avec la base de données MySQL.\n' +
						'Vue (View) :  \n' +
						'Composée de pages JSP (services.jsp, etc.) pour afficher les données à l\'utilisateur.\n' +
						'Utilise HTML, CSS, SCSS et Bootstrap pour la mise en page et le style.\n' +
						'Contrôleur (Controller) :  \n' +
						'Implémenté par des servlets Java (AccueilServlet, AboutServlet, ContactServlet, ServicesServlet, HeaderServlet).\n' +
						'Gère les requêtes HTTP, interagit avec le modèle et sélectionne la vue appropriée.\n' +
						'Configuration :  \n' +
						'web.xml configure les servlets et les mappings d\'URL.\n' +
						'pom.xml gère les dépendances Maven.\n' +
						'Serveur de Servlet :  \n' +
						'Utilise Apache Tomcat pour déployer et exécuter l\'application.\n' +
						'Cette architecture permet une séparation claire des préoccupations, facilitant la maintenance et l\'évolution de l\'application.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			//SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: 'StudySmooth',
		url: '',
		category: 'Application mobile',
		img: '/images/StudySmooth/Mobile1.jpg',
		ProjectHeader: {
			title: 'StudySmooth',
			publishDate: 'Janvier 2024',
			tags: 'Application mobile',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'StudySmooth',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'StudySmooth',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'StudySmooth',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: 'Covoiturage',
		url: 'cloud-storage-platform',
		category: 'Application web',
		img: '/images/ui-project-2.jpg',
		ProjectHeader: {
			title: 'Covoiturage',
			publishDate: 'Février 2024',
			tags: 'Application web & API REST',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Covoiturage',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Covoiturage',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Covoiturage',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			//SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 5,
		title: 'Douaroù Breizh',
		url: 'wetalk-social-app',
		category: 'Application mobile',
		img: '/images/mobile-project-1.jpg',
		ProjectHeader: {
			title: 'Douaroù Breizh',
			publishDate: 'Mars 2024',
			tags: 'Application mobile & objets connectés',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Douaroù Breizh',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Douaroù Breizh',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Douaroù Breizh',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			//SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/realstoman',
			// 	},
			// ],
		},
	},
	{
		id: 6,
		title: 'Gest\'IML',
		url: 'apple-new-design-system',
		category: 'Application web',
		img: '/images/web-project-1.jpg',
		ProjectHeader: {
			title: 'Gest\'IML',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Apple New Design System',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Apple New Design System',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Apple New Design System',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			//SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
];

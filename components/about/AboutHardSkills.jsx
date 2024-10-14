
function AboutHardSkills() {
    return (
        <div className="pt-10 pb-5 mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
            <h1 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
                Mes compétences
            </h1>
            <p className="text-lg mt-14 md:text-lg text-center text-primary-dark dark:text-primary-light">
                Dans le cadre de la formation, grâce à l&apos;autoformation et mes
                expériences passées, j&apos;ai développé des compétences en lien avec le
                métier. <br />
            </p>
            <div className="grid grid-cols-2 divide-x my-14">
                <div className="text-center">
                    <ul className="mr-4">
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">Analyse et Conception</h3>
                        <li className="text-lg text-indigo-300 mt-6">
                            User Stories, Figma, Merise, Diagrammes UML
                        </li>
                    </ul>
                    <ul className="mr-2 mt-8">
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">Back-end</h3>
                        <li className="text-lg text-indigo-300 mt-6">
                            Java, PHP, JavaScript
                        </li>
                    </ul>
                    <ul className="mr-3 mt-8">
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">Front-end</h3>
                        <li className="text-lg text-indigo-300 mt-6">
                            HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, JavaScript, JavaFX
                        </li>
                    </ul>
                    <ul className="mr-2 mt-8">
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">Frameworks</h3>
                        <li className="text-lg text-indigo-300 mt-6">
                            Symfony, Node.js, Express.js, Vue.js, React.js, Next.js
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <ul className="ml-2">
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">Base de
                            données</h3>
                        <li className="text-lg text-indigo-300 mt-6">
                        PostgreSQL, MySQL, MariaDB, SQLite, MongoDB, Firestore, JSON
                        </li>
                    </ul>
                    <ul className="ml-2 mt-8">
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">Mapping
                            objet-relationnel</h3>
                        <li className="text-lg text-indigo-300 mt-6">
                            Hibernate, Doctrine, Sequelize
                        </li>
                    </ul>
                    <ul className="ml-2 mt-8">
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light">DevOps</h3>
                        <li className="text-lg text-indigo-300 mt-6">
                            Git, GitHub, Gitlab, Jira, Trello
                        </li>
                        <li className="text-lg text-indigo-300 ">
                            Webpack, Maven, NPM, Gradle
                        </li>
                        <li className="text-lg text-indigo-300 ">
                            Junit, Jest, PHPUnit, Selenium, SonarQube, Synk
                        </li>
                        <li className="text-lg text-indigo-300 ">
                            Docker, Nginx, Sentry
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutHardSkills;



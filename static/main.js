import { MelodiStore } from './store.js';
import { MelodiJS } from './melodijs.js';
import { MelodiRouter } from './router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Parcours } from './components/Parcours.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { ProjectDetails } from './components/ProjectDetails.js';

// --- Routes ---
const routes = [
	{
		path: '/',
		component: Home,
		transition: 'fade'
	},
	{
		path: '/about',
		component: About,
		transition: 'fade'
	},
	{
		path: '/parcours',
		component: Parcours,
		transition: 'fade'
	},
	{
		path: '/skills',
		component: Skills,
		transition: 'fade'
	},
	{
		path: '/projects',
		component: Projects,
		transition: 'fade'
	},
	{
		path: '/contact',
		component: Contact,
		transition: 'fade'
	},
	{
		path: '/project/:id',
		component: ProjectDetails,
		transition: 'slide'
	}
];

// --- Root App ---
const App = {
	components: {
		'app-header': Header,
		'app-footer': Footer
	},
	template: `
        <div>
            <app-header></app-header>
            <main>
                <router-view></router-view>
            </main>
            <app-footer></app-footer>
        </div>
    `
};

// Initialize Store
const store = new MelodiStore({
	state: () => ({
		projects: [
			{
				id: 1,
				title: 'MelodiJS (Byt3Lab)',
				description: 'Framework JavaScript Ultra-léger (~3KB) axé sur la réactivité.',
				technologies: ['TypeScript', 'JavaScript (ES6+)', 'Signals/Effects'],
				fullDescription: 'Framework JavaScript Ultra-léger (~3KB) axé sur la réactivité. Conception d’une bibliothèque UI réactive inspirée de l’Options API de Vue.js et du système de signaux de SolidJS. Implémentation d\'une réactivité "fine-grained" permettant des mises à jour chirurgicales du DOM sans Virtual DOM.',
				features: ['Réactivité Fine-Grained', 'Pas de Virtual DOM', 'Routeur SPA Intégré', 'Store Centralisé'],
				link: 'https://github.com/byt3lab/melodijs',
				github: 'https://github.com/byt3lab/melodijs'
			},
			{
				id: 2,
				title: 'MELODI (Byt3Lab)',
				description: 'ERP Modulaire et Extensible pour PME avec architecture plugin.',
				technologies: ['Python', 'Flask', 'JavaScript', 'Docker', 'PostgreSQL'],
				fullDescription: 'ERP Modulaire et Extensible pour PME. Architecture d\'un progiciel de gestion (ERP) robuste et scalable utilisant un système de plugins dynamiques. Développement d\'une interface web réactive et d\'un backend performant pour la gestion des processus métiers.',
				features: ['Architecture Modulaire', 'Système de Plugins', 'Scalabilité', 'Backend Performant'],
				link: 'https://github.com/byt3lab/melodi',
				github: 'https://github.com/byt3lab/melodi'
			},
			{
				id: 3,
				title: 'Portfolio Personnel',
				description: 'Site vitrine et identité numérique développé avec MelodiJS.',
				technologies: ['MelodiJS', 'JavaScript', 'HTML5', 'CSS3'],
				fullDescription: 'Site vitrine et identité numérique. Conception et déploiement d\'un portfolio interactif présentant mon parcours et mes réalisations techniques.',
				features: ['Design Interactif', 'Built with MelodiJS', 'Responsive', 'Animations'],
				link: 'https://gomsugaetant.github.io/me',
				github: 'https://github.com/gomsugaetant/me'
			},
			{
				id: 4,
				title: 'Kwembou IP Law',
				description: 'Site web et gestion d\'infrastructure pour cabinet juridique.',
				technologies: ['WordPress', 'PHP', 'MySQL'],
				fullDescription: 'Site web et gestion d\'infrastructure pour cabinet juridique. Gestion de l\'acquisition, de la configuration et de la gestion du nom de domaine ainsi que de l\'hébergement. Optimisation continue des performances et de la sécurité.',
				features: ['Gestion Infrastructure', 'Déploiement', 'Sécurité', 'Optimisation Performance'],
				link: 'https://kwembou-iplaw.com/',
				github: '#'
			}
		]
	})
});

// Initialize MelodiJS
const app = new MelodiJS({
	...App
});

// Initialize Router
const router = new MelodiRouter({
	routes: routes
});

// Install plugins
app.use(store);
app.use(router);

app.mount('#app');

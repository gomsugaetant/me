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

// Initialize MelodiJS
const app = new MelodiJS({
	...App
});

// Initialize Router
const router = new MelodiRouter({
	routes: routes
});

// Install router plugin
app.use(router);

app.mount('#app');

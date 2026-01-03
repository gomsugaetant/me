export const ProjectDetails = {
    template: { url: 'static/components/ProjectDetails.html' },
    data: function () {
        return {
            project: null
        };
    },
    hooks: {
        mounted: function () {
            // Simulate fetching project data based on ID
            // In a real app, this would use this.$router.params.id to fetch from an API
            // For now, we'll use a mock database
            const id = this.$router.params().id;
            console.log('ProjectDetails mounted, ID:', id);

            // Mock data
            const projectsDB = {
                '1': {
                    id: 1,
                    title: 'MelodiJS (Byt3Lab)',
                    technologies: ['TypeScript', 'JavaScript (ES6+)', 'Signals/Effects'],
                    fullDescription: 'Framework JavaScript Ultra-léger (~3KB) axé sur la réactivité. Conception d’une bibliothèque UI réactive inspirée de l’Options API de Vue.js et du système de signaux de SolidJS. Implémentation d\'une réactivité "fine-grained" permettant des mises à jour chirurgicales du DOM sans Virtual DOM.',
                    features: ['Réactivité Fine-Grained', 'Pas de Virtual DOM', 'Routeur SPA Intégré', 'Store Centralisé'],
                    link: 'https://github.com/byt3lab/melodijs',
                    github: 'https://github.com/byt3lab/melodijs'
                },
                '2': {
                    id: 2,
                    title: 'MELODI (Byt3Lab)',
                    technologies: ['Python', 'Flask', 'JavaScript', 'Docker', 'PostgreSQL'],
                    fullDescription: 'ERP Modulaire et Extensible pour PME. Architecture d\'un progiciel de gestion (ERP) robuste et scalable utilisant un système de plugins dynamiques. Développement d\'une interface web réactive et d\'un backend performant pour la gestion des processus métiers.',
                    features: ['Architecture Modulaire', 'Système de Plugins', 'Scalabilité', 'Backend Performant'],
                    link: '#',
                    github: '#'
                },
                '3': {
                    id: 3,
                    title: 'Portfolio Personnel',
                    technologies: ['MelodiJS', 'JavaScript', 'HTML5', 'CSS3'],
                    fullDescription: 'Site vitrine et identité numérique. Conception et déploiement d\'un portfolio interactif présentant mon parcours et mes réalisations techniques.',
                    features: ['Design Interactif', 'Built with MelodiJS', 'Responsive', 'Animations'],
                    link: 'https://gomsugaetant.github.io/me',
                    github: 'https://github.com/gomsugaetant/me'
                },
                '4': {
                    id: 4,
                    title: 'Kwembou IP Law',
                    technologies: ['WordPress', 'PHP', 'MySQL'],
                    fullDescription: 'Site web et gestion d\'infrastructure pour cabinet juridique. Gestion de l\'acquisition, de la configuration et de la gestion du nom de domaine ainsi que de l\'hébergement. Optimisation continue des performances et de la sécurité.',
                    features: ['Gestion Infrastructure', 'Déploiement', 'Sécurité', 'Optimisation Performance'],
                    link: 'https://kwembou-iplaw.com/',
                    github: '#'
                }
            };

            if (id && projectsDB[id]) {
                this.project = projectsDB[id];
            } else {
                this.project = { title: 'Project Not Found', fullDescription: 'The project you are looking for does not exist.' };
            }
        }
    }
};

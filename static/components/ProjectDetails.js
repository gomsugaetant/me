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
            const id = this.$router.params.id;
            console.log('ProjectDetails mounted, ID:', id);

            // Mock data
            const projectsDB = {
                '1': {
                    id: 1,
                    title: 'E-Commerce Platform',
                    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
                    fullDescription: 'A comprehensive e-commerce solution built for scalability. Features include a real-time inventory system, secure payment processing with Stripe, and a user-friendly admin dashboard for managing products and orders.',
                    features: ['User Authentication', 'Shopping Cart & Checkout', 'Admin Dashboard', 'Payment Integration'],
                    link: '#',
                    github: '#'
                },
                '2': {
                    id: 2,
                    title: 'Task Management App',
                    technologies: ['React', 'Firebase', 'Tailwind CSS'],
                    fullDescription: 'A collaborative task management tool designed for remote teams. It allows users to create boards, assign tasks, set due dates, and track progress in real-time.',
                    features: ['Real-time updates', 'Drag & Drop Interface', 'Team Collaboration', 'Dark Mode'],
                    link: '#',
                    github: '#'
                },
                '3': {
                    id: 3,
                    title: 'Portfolio Website',
                    technologies: ['MelodiJS', 'CSS3', 'HTML5'],
                    fullDescription: 'A modern, responsive portfolio website built to showcase my skills and projects. It features a custom component-based architecture using MelodiJS and a polished design system.',
                    features: ['Component-based Architecture', 'Custom Router', 'Dark Mode', 'Responsive Design'],
                    link: '#',
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

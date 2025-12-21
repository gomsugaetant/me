export const Projects = {
    template: { url: 'static/components/Projects.html' },
    data: function () {
        return {
            projects: [
                { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and admin panel.', link: '#' },
                { id: 2, title: 'Task Management App', description: 'A productivity tool for teams to track tasks and collaborate.', link: '#' },
                { id: 3, title: 'Portfolio Website', description: 'This very website, built with MelodiJS and custom CSS.', link: '#' }
            ]
        };
    }
};

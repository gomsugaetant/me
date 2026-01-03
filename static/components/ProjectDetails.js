export const ProjectDetails = {
    template: { url: 'static/components/ProjectDetails.html' },
    data: function () {
        return {
            project: null,
            skills: [
                'JavaScript (ES6+)', 'TypeScript', 'Python',
                'React.js', 'Next.js', 'Node.js', 'Express', 'Flask', 'FastApi',
                'MongoDB', 'PostgreSQL', 'Mysql',
                'Git/GitHub', 'Docker', 'Vercel', 'Netlify', 'WordPress', 'AWS', 'AZURE', 'GCP', 'Render',
                'Résolution de problèmes', 'Travail en équipe', 'Agilité', 'Curiosité technologique'
            ]
        };
    },
    hooks: {
        mounted: function () {
            const id = this.$router.params().id;
            const project = this.$store.state.projects.find(p => p.id == id);

            if (project) {
                this.project = project;
            } else {
                this.project = { title: 'Project Not Found', fullDescription: 'The project you are looking for does not exist.' };
            }
        }
    }
};

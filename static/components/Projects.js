export const Projects = {
    template: { url: 'static/components/Projects.html' },
    data: function () {
        return {
            projects: []
        };
    },
    hooks: {
        mounted: function () {
            this.projects = this.$store.state.projects;
        }
    }
};

export const Header = {
    template: { url: 'static/components/Header.html' },
    data: function () {
        return {
            isDark: false
        };
    },
    computed: {
        themeIcon: function () {
            return this.isDark ? '☀️' : '🌙';
        }
    },
    methods: {
        toggleTheme: function () {
            this.isDark = !this.isDark;
            document.body.classList.toggle('dark-theme');
        }
    }
};

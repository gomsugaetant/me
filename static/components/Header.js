export const Header = {
    template: { url: 'static/components/Header.html' },
    data: function () {
        return {
            isDark: false,
            isMenuOpen: false
        };
    },
    computed: {
        themeIcon: function () {
            return this.isDark ? '☀️' : '🌙';
        },
        menuIcon: function () {
            return this.isMenuOpen ? '✕' : '☰';
        }
    },
    methods: {
        toggleTheme: function () {
            this.isDark = !this.isDark;
            document.body.classList.toggle('dark-theme');
        },
        toggleMenu: function () {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu: function () {
            this.isMenuOpen = false;
        }
    }
};

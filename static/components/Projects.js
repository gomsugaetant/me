export const Projects = {
    template: { url: 'static/components/Projects.html' },
    data: function () {
        return {
            projects: [
                { id: 1, title: 'MelodiJS (Byt3Lab)', description: 'Framework JavaScript Ultra-léger (~3KB) axé sur la réactivité.', link: 'https://github.com/byt3lab/melodijs' },
                { id: 2, title: 'MELODI (Byt3Lab)', description: 'ERP Modulaire et Extensible pour PME avec architecture plugin.', link: '#' },
                { id: 3, title: 'Portfolio Personnel', description: 'Site vitrine et identité numérique développé avec MelodiJS.', link: 'https://github.com/gomsugaetant/me' },
                { id: 4, title: 'Kwembou IP Law', description: 'Site web et gestion d\'infrastructure pour cabinet juridique.', link: 'https://kwembou-iplaw.com/' }
            ]
        };
    }
};

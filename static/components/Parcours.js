export const Parcours = {
    template: { url: 'static/components/Parcours.html' },
    data: function () {
        return {
            items: [
                { id: 1, date: '2023 - Présent', title: 'Développeur Fullstack', place: 'Entreprise X', description: 'Développement d\'applications web modernes, gestion de projets, CI/CD.' },
                { id: 2, date: '2021 - 2023', title: 'Master Informatique', place: 'Université Y', description: 'Spécialisation en développement web et cloud.' },
                { id: 3, date: '2018 - 2021', title: 'Licence Informatique', place: 'Université Z', description: 'Fondamentaux de l\'informatique et programmation.' }
            ]
        };
    }
};

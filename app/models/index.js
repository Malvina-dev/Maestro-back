import Preview from "./previewModel.js";
import Genre from "./genreModel.js";

// DEFINITION DE LA TABLE DE LIAISON ENTRE LES TABLES GENRE ET PREVIEW

// une Preview peut avoir plusieurs Genres
Preview.belongsToMany(Genre, {
	through: "preview_genre", // nom de la table de liaison
	foreignKey: "preview_id", // comment la clé de Preview sera écrite sur la table de liaison
    otherKey: "genre_id", // other key fait référence à la clé de l'autre table (ici de la table genre)
    as: "listGenres" // l'alias qu'on donne pour récupérer l'ensemble des genres d'une preview ex: preview.listGenres
});

// un Genre peut avoir plusieurs Previews
Genre.belongsToMany(Preview, {
    through: "preview_genre", // nom de la table de liaison
    foreignKey: "genre_id", // comment la clé de Genre sera écrite sur la table de liaison
    otherKey: "preview_id", // other key fait référence à la clé de l'autre table (ici de la table preview)
    as: "listPreviews" // l'alias qu'on donne pour récupérer l'ensemble des previews d'un genre ex: genre.listPreviews
});

export { Preview, Genre };
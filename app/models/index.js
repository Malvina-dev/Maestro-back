import Preview from "./previewModel.js";
import Genre from "./genreModel.js";

// une Preview peut avoir plusieurs Genres
Preview.belongsToMany(Genre, {
	through: "preview_genre",
	foreignKey: "preview_id",
    otherKey: "genre_id",
    as: "genre"
});

// un Genre peut avoir plusieurs Previews
Genre.belongsToMany(Preview, {
    through: "preview_genre",
    foreignKey: "genre_id",
    otherKey: "preview_id",
    as: "preview"
});

export { Preview, Genre };
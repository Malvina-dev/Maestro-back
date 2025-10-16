import Preview from "./previewModel.js";
import Genre from "./genreModel.js";

// une preview peut avoir plusieurs genres
Preview.belongsToMany(Genre, {
	through: "preview_genre", // preview a un ou des genres
	foreignKey: "preview_id", // dans la future table foreign key
    otherKey: "genre_id",
    as: "genre"
});

Genre.belongsToMany(Preview, {
    through: "preview_genre",
    foreignKey: "genre_id",
    otherKey: "preview_id",
    as: "preview"
});

export { Preview, Genre };
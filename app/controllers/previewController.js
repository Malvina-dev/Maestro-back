import { User, Projet, Company, Preview, Genre } from "../models/index.js";

const previewController = {

    findAll: async (req, res) => {
        try {
            const previews = await Preview.findAll();
            if (previews.length > 0) {
                res.json(previews);
            } else {
                res.status(404).json({message : "Aucun extrait trouvé"});
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des extraits", error);
            res.status(500).json({error: "Erreur interne du serveur"});
        }
    },

    findByFilter: async (req, res) => {
        try {
            // if ...
            const { genre, date } = req.query;
            if (genre) {
                const previews = await Preview.findAll({
                    include: [{
                        model: Genre,
                        as: "listGenres",
                        where: {
                            label: genre
                        }
                    }]
                });
            }

            if (date) {
                const previews = await Preview.findAll({
                    order: [date, 'DESC']
                    })
                };

            res.json(previews);
        } catch (error) {
            console.error("Erreur lors de la recherche des extraits filtrés : ", error);
            res.status(500).json({error: "Erreur interne du serveur"});
        }
    }


}


export default previewController;
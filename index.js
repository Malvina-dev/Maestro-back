// ==========================================================
// 🌍 Importation des modules nécessaires
// ==========================================================
import * as dotenv from "dotenv";  // Charge les variables d'environnement depuis le fichier .env
import express from "express";      // Importe le framework Express pour créer le serveur web
import sequelize from "./app/db/database.js"; // Importe la connexion à la base de données Sequelize

// ==========================================================
// ⚙️ Configuration de dotenv
// ==========================================================
dotenv.config();  // Permet d'accéder aux variables définies dans .env via process.env

// ==========================================================
// 🚀 Initialisation d'Express
// ==========================================================
const app = express();                // Crée une application Express
const port = process.env.PORT || 3000; // Définit le port (priorité à la variable .env, sinon 3000)

// ==========================================================
// 🧠 Fonction principale : connexion à la base + lancement du serveur
// ==========================================================
async function main() {
    try {
        // 🔌 Test de connexion à la base de données
        await sequelize.authenticate(); 
        console.log("✅ Connexion à la base réussie");

        // 🌐 Lancement du serveur HTTP une fois la base connectée
        app.listen(port, () => {
            console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
        });
    } catch (error) {
        // ❌ Gestion des erreurs de connexion à la base
        console.error("❌ Erreur de connexion à la base :", error);
    }
}

// ==========================================================
// 🏁 Démarrage du serveur (appel de la fonction principale)
// ==========================================================
main();

// ==========================================================
// 💡 Notes :
// ----------------------------------------------------------
// - dotenv doit être installé : npm install dotenv
// - sequelize doit être configuré dans ./app/db/database.js
// - si tu veux tester rapidement ton serveur :
//     ajoute une route Express simple avant la fonction main()
//       ex. : app.get("/", (req, res) => res.send("Bienvenue sur Maestro-back !"));
// ==========================================================

import sequelize from "./database.js";
import { User, Projet, Company, Preview, Genre, MessageContact, Description } from "../models/index.js";


try {
    await sequelize.sync({ force: true });
    
    // compagny
    await Company.create({
        name: 'Entreprise 1',
        siret: "12345678912345",
        localisation: 'Paris',
    });
    await Company.create({
        name: 'Entreprise 2',
        siret: "22345678912345",
        localisation: 'Lyon',
    });
    await Company.create({
        name: 'Entreprise 3',
        siret: "32345678912345",
        localisation: 'Nice',
    });
    await Company.create({
        name: 'Entreprise 4',
        siret: "42345678912345",
        localisation: 'Bordeaux',
    });
    


    await Preview.create({
        title: "Extrait 1",
        isStar: false
    }),
    await Preview.create({
        title: "Extrait 2",
        isStar: false
    }),
    await Preview.create({
        title: "Extrait 3",
        isStar: true
    })

    // messages-contact
    await MessageContact.create({
        mail: 'test1@test.com',
        message: 'Maestro is magic'
    });
    await MessageContact.create({
        mail: 'test2@test.com',
        message: 'Maestro les meilleurs',
    });
    await MessageContact.create({
        mail: 'test3@test.com',
        message: 'Maestro all over teh world',
    });

    // Description-portfolio
    await Description.create({
        title: 'Title1',
        image_link: 'Image1',
        text: 'Text1'
    });
    await Description.create({
        title: 'Title2',
        image_link: 'Image2',
        text: 'Text1'
    });
    await Description.create({
        title: 'Title3',
        image_link: 'Image3',
        text: 'Text3'
    });



} catch (error) {
    console.error(error);
}
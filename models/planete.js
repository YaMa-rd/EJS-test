const fs = require('fs');

const getPlanetesFromFile = (cb) => {

    fs.readFile('./data/planetes.json', (error, fileContent) => {
        if (error) return cb([]);
        else  cb(JSON.parse(fileContent));
    });
}

module.exports = class Planete
{
    constructor(title, description, link, id)
    {
        this.title = title;
        this.description = description;
        this.link = link;
        this.id = id;
    }

    save() {
        getPlanetesFromFile(planetes =>
            {
            this.id = `${planetes.length}`;
            planetes.push(this);
            fs.writeFile('./data/planetes.json', JSON.stringify(planetes), (error) =>
            {
                console.log(error);
            });
        });
    }

    static fetchAll(cb)
    {
        getPlanetesFromFile(cb);
    }

    static findById(id, cb) {
        getPlanetesFromFile(planetes =>
            {
            const planete = planetes.find(planete => planete.id === id);
            cb(planete);
        });
    }
}
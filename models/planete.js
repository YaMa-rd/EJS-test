const fs = require('fs');
const path = require('path');
const Cart = require('./cart');

const dataPlanetePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'planetes.json'
);

const getPlanetesFromFile = (cb) => {
    fs.readFile(dataPlanetePath, (error, fileContent) => {
        if (error) return cb([]);
        else  cb(JSON.parse(fileContent));
    });
}

module.exports = class Planete
{
    constructor(title, description, link, price, id)
    {
        this.title = title;
        this.description = description;
        this.link = link;
        this.price = price;
        this.id = id;
    }

    save() {
        getPlanetesFromFile(planetes =>
            {
            this.id = `${planetes.length}`;
            planetes.push(this);
            fs.writeFile(dataPlanetePath, JSON.stringify(planetes), (error) =>
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
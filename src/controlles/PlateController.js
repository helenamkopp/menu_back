const mongoose = require('mongoose');

const Plate = mongoose.model('Plate')

module.exports = {
    async index(req, res) {
        const { page = 1} = req.query;
        const plates = await Plate.paginate({}, { page, limit: 10});

        return res.json(plates);
    }, 
    async show(req, res){
        const plate = await Plate.findById(req.params.id);

        return res.json(plate);
    },
    async store(req, res){
        const plate = await Plate.create(req.body);

        return res.json(plate);
    },
    async update(req, res){

        const plate = await Plate.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(plate); 
    },
    async destroy(req, res){
        await Plate.findByIdAndRemove(req.params.id);

        return res.send();
    }

};
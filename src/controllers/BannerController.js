const mongoose = require('mongoose');
const Banner = mongoose.model('Banner');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const banners = await Banner.paginate({},{page: page, limit: 10});
        return res.json(banners);
    },
    async store (req, res) {
        req.body.image_name = req.file.path;
        const banner = await Banner.create(req.body);
        return res.json(banner);
    },
    async show (req, res) {
        const banner = await Banner.findById(req.params.idProduct);
        return res.json(banner);
    },
    async update (req, res) {
        const banner = await Banner.findByIdAndUpdate(req.params.idBanner, req.body, {new: true});
        return res.json(banner);
    },
    async destroy (req, res) {
        await Banner.findByIdAndRemove(req.params.idBanner);
        return res.send();
    }
};
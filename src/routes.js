const express = require('express');
const routes = express.Router();
const BannerController = require('./controllers/BannerController');
const multer = require('multer');

let storageBanners = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/banners/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});
let uploadFileBanner = multer({storage: storageBanners});

// BANNER ROUTES
routes.get('/banners', BannerController.index);
routes.get('/banners/:idBanner', BannerController.show);
routes.post('/banners', uploadFileBanner.single("image_path"), BannerController.store);
routes.put('/banners/:idBanner', BannerController.update);
routes.delete('/banners/:idBanner', BannerController.destroy);

module.exports = routes;
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const BannerSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

BannerSchema.plugin(mongoosePaginate);
mongoose.model('Banner', BannerSchema);
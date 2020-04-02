const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
    {
        user: {
            type: Array,
            default: []
        },
        data: {
            type: Array,
            default: []
        },
        product: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };

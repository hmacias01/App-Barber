"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class clientesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hi'));
    }
}
const ClientesRoutes = new clientesRoutes();
exports.default = ClientesRoutes.router;

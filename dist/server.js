"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_routes_1 = __importDefault(require("./routes/data.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
console.log("acaaaa: ", DB_URL);
if (!DB_URL) {
    console.error('MongoDB connection URL not found in .env');
    process.exit(1);
}
mongoose_1.default.connect(DB_URL).then(() => {
    console.log('Conectado a MongoDB');
    app_1.default.use('/api', data_routes_1.default);
    app_1.default.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});

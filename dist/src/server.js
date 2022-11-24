"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const routes_1 = __importDefault(require("./routes/routes"));
const mongoose_1 = __importDefault(require("./utils/mongoose"));
const app = (0, express_1.default)();
// const PORT: string | number = process.env.PORT
const PORT = process.env.PORT || 9000;
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(error_middleware_1.default);
(0, mongoose_1.default)().then(() => console.log('Connected')).catch(err => console.log(err.message));
app.listen(PORT, () => {
    console.log(PORT);
});

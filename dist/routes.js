"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createUser_1 = __importDefault(require("./services/createUser"));
function returnMessage(request, response) {
    var user = createUser_1.default({
        name: "Gustavo",
        email: 'email@email.com',
        password: '123456'
    });
    return response.json(user);
}
exports.default = returnMessage;

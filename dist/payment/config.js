"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardIssuers = exports.TransactionStatus = void 0;
exports.TransactionStatus = ['success', 'failure'];
exports.CardIssuers = [
    {
        name: "Visa",
        length: [13, 16],
        prefixes: ["4"],
    },
    {
        name: "MasterCard",
        length: [16],
        prefixes: ["51", "52", "53", "54", "55"],
    },
    {
        name: "Maestro",
        length: [12, 13, 14, 15, 16, 18, 19],
        prefixes: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763"],
    },
    {
        name: "AmericanExpress",
        length: [15],
        prefixes: ["34", "37"],
    }
];
//# sourceMappingURL=config.js.map
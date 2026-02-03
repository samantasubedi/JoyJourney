"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var port = 5000;
var app = (0, express_1.default)();
app.get("/", function (req, res) { res.send("this is homepage"); });
app.listen(port, function () { console.log("server running in port", port); });

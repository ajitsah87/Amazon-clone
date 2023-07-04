const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
 "sk_test_51NP8xaSBhZx1xmzeEOMxEzr7lz64O7mmzwd3VYNdW53Y2I6lb8PFgeV1k6zQLpmtAI6VUtXYWLAKixo4hgc814Xu00cpGToWhu");

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));
exports.api = functions.https.onRequest(app);

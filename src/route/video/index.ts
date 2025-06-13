// imports ================================================== //
import { Router } from "express";
import { GET, POST, PUT } from "./methods";
import upload from "../../helpers/multier";

// constants ================================================ //
const ROUTER = Router();

// main ===================================================== //
ROUTER
    .route("/")
        .get(GET)
        .put(PUT)
        .post(upload.single("video"), POST);

// exports ================================================== //
export default ROUTER;
import express from "express";
import { home, movieDetail, loveNico } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);

movieRouter.get("/add", loveNico);
movieRouter.post("/add", loveNico);

movieRouter.get("/:id", movieDetail);

export default movieRouter;

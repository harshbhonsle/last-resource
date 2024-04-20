import { Router } from "express";
import { getsubjectFiles } from "../controllers/subject.js";

const router = Router();

router.get('/:subject', getsubjectFiles);

export { router as subjectRouter };
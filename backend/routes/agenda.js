import express from "express";
const router = express.Router();
router.post("/reservar", (req,res)=>{ res.json({msg:"Agendamento reservado"}); });
export default router;
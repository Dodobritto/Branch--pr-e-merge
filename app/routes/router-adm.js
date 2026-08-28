const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator")


router.get("/", (req, res)=>{
    res.render("pages/index-adm");
})

router.get("/adm-cliente", (req, res)=>{
    res.render("pages/adm-cliente");
})

router.get("/adm-cliente-novo", body("nome")
        .notEmpty()
        .withMessage("O nome é obrigatório")
        .isLength({ min: 3 })
        .withMessage("O nome deve ter pelo menos 3 caracteres"),
 
    body("email")
        .notEmpty()
        .withMessage("O e-mail é obrigatório")
        .isEmail()
        .withMessage("Digite um e-mail válido"),
 
    body("telefone")
        .notEmpty()
        .withMessage("O telefone é obrigatório"),
 
    (req, res) => {
 
        const erros = validationResult(req);
 
        if (!erros.isEmpty()) {
            return res.render("pages/adm-cliente-novo", {
                erros: erros.array(),
                dados: req.body
            });
        }
 
        console.log(req.body);
 
        res.redirect("/adm/adm-cliente");
    }
);

router.get("/adm-cliente-edit", (req, res)=>{
    res.render("pages/adm-cliente-edit");
})

router.get("/adm-cliente-list", (req, res)=>{
    res.render("pages/adm-cliente-list");
})

router.get("/adm-cliente-del", (req, res)=>{
    res.render("pages/adm-cliente-del");
})







module.exports = router;
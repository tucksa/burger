const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        const Obj = {
            burgers: data
        };
        console.log(Obj);
        res.render("index", Obj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id : result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    const condition = "id = " + req.params.id;
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
       console.log(result)
    });
});

module.exports = router;
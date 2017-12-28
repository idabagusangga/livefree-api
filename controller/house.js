const House = require('../models/house');


class HouseController{
    static readDataBase(req,res){
        House.find()
        .then(houses=>{
            res.status(200).json({houses:houses})
        })
        .catch(err=>{
            res.status(500).json({err:err})
        })
    }
    static createHouse(req,res){
        console.log(req.file);
        console.log('-----------------------');
        console.log(req.body);
        req.body.map = req.file.cloudStoragePublicUrl
        let newHouse = new House({
            name        : req.body.name,
            location    : req.body.location,
            price       : req.body.price,
            spec        : req.body.spec,
            ownerInfo   : req.body.ownerInfo,
            map         : req.body.map
        })
        
        newHouse.save()
        .then(success=>{
            res.status(200).json({msg:'new house saved'})
        })
        .catch(err=>{
            res.status(500).json({err:err})
        })
    }
}

module.exports = HouseController;
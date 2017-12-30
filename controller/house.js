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
            console.log('success');
            res.status(200).json({msg:'new house saved'})
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({err:err})
        })
    }
    static destroyHouse(req , res){
        House.remove({_id : req.params.id})
        .then(response=>{
            console.log('berhasil');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    static updateHouse(req,res){
        req.body.map = req.file.cloudStoragePublicUrl
        House.find({_id:req.params.id})
        .then(house=>{
            house.name = req.body.name || house.name
            house.location = req.body.location || house.location
            house.price = req.body.price || house.price
            house.spec = req.body.spec || house.spec
            house.ownerInfo = req.body.ownerInfo || house.ownerInfo
            house.map = req.body.map || house.map
            
            house.save()
            .then(result=>{
                console.log('data updated');
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

module.exports = HouseController;
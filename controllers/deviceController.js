const uuid = require('uuid') 
const path = require('path') //пакет дающий сохранение файлов по опред пути
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')


class DeviceController {
    async create (req,res,next){
    try {
  let {name,price,brandId,typeId,info} = req.body
  const {img} = req.files   //download package 'express-fileupload'
  let fileName = uuid.v4() + '.jpg' //create unique name (install uuid)
//делаем передачу файлов с сервера клиенту
img.mv(path.resolve(__dirname,'..','static',fileName))
if (info) {
    info = JSON.parse(info)
    info.forEach(i => DeviceInfo.create({
        title: i.title,
        description: i.description,
        deviceId: device.id
    }))
}
const device = await Device.create({name,price,brandId,typeId,img:fileName})
return res.json(device)
    }catch(e){
        next(ApiError.badRequest(e.message))
    }
}
    async getAll (req,res){
let {brandId,typeId, limit,page} = req.query;
page = page || 1 //обозначаем дефолт значения
limit = limit || 9
//посчитаем отступ
let offset = page*limit - limit
let devices;
//чтобы знать общее кол-во товаров на front 
//используем вместо findAll() - findAndCountAll()
if (!brandId&&!typeId){
devices = await Device.findAndCountAll({limit,offset})
}
if (brandId&&!typeId){
devices = await Device.findAndCountAll({where: {brandId}})
}
if (!brandId&&typeId){
devices = await Device.findAndCountAll({where: {typeId}})  
}
if (brandId&&typeId){
devices = await Device.findAndCountAll({where: {brandId, typeId}}) 
}
return res.json(devices)
    }
    async getOne (req,res){
const {id} = req.params 
const device = await Device.findOne({
    where:{id},
    include: [{model: DeviceInfo, as: 'info'}]
})
return res.json(device)
}
    }

module.exports = new DeviceController()
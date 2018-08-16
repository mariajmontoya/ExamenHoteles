'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const HotelModel = require('./hotel.model');

module.exports.hotelRegistry = function(req, res){
    let newHotel = new HotelModel({
        HotelName : req.body.HotelName,
        Map : req.body.Map,
        City: req.body.City,
        District : req.body.District,
        Address : req.body.Address,
        ClientPhone : req.body.ClientPhone,
        CSEmailClient : req.body.CSEmailClient,
        CSPhone : req.body.CSPhone,
        CSEmailReservations : req.body.CSEmailReservations
        });

    newHotel.save(function(error){
        if(error){
            res.json({success : false, msg : 'Hotel not registered, and error has ocurred' + error});
        }else{
            res.json({success : true, msg : 'Successfully registered'});
        }

    });

};


module.exports.updateHotel = function (req,res){
    HotelModel.findByIdAndUpdate(req.body._id, { $set: req.body},
    function (err, hotel) {
        if (err) {
            res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

        } else {
            res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
        }
    });
};



module.exports.listHotel = function(req, res){
    HotelModel.find().then(
        function(hoteles){
            res.send(hoteles);
        });
};


module.exports.filterHotel = function(req, res){
    HotelModel.find(req.body.idHotel).then(
        function(hoteles){
            res.send(hoteles);
        });
};

module.exports.deactivateHotel = function(req, res){
    HotelModel.update(
        {_id: req.body._id}, 
        {
            Desactivado : req.body.Desactivado
        },
        function(error){
            if(error){
                res.json({success : false, msg : 'No se pudo desactivar el hotel, ocurrió el siguiente error' + error});
            }else{
                res.json({success : true, msg : 'Se eliminó el hotel con éxito'});
            }
        }
    )
};

module.exports.deleteHotel = function (req, res) {
    HotelModel.findByIdAndDelete(req.body._id,
        function (err, hotel) {
            if (err) {
                res.json({ success: false, msg: 'No se ha borrado el hotel.' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'El hotel se ha eliminado correctamente.' + res });
            }
        });
};


module.exports.findHotelById = function (req,res){
    HotelModel.findById({_id: req.body._id}).then(
        function(hoteles){
            res.send(hoteles); 
        }
    );

};


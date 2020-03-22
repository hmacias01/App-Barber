const express = require('express');
const Router = express.Router();
const pool = require('../database');


Router.get('/',(req,res)=>{
    res.send('sep');
});
//Selecionar todas las barberias para mostrar en el home
Router.get('/get', (req, res) => {
    console.log("Seleccionar todas las barberias")

    const queryString = "SELECT * FROM barberias"
    pool.query(queryString,(err, rows, fields) => {
        if(err){
            console.log("No hay barberias " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("barberias Seleccionados")
        res.json(rows)
    })
});

//Mostrar informacion de las barberias
Router.get('/get/:id', (req, res) => {
    console.log("Seleccionar informacion barberia: "+ req.params.id)

    const Id_Barberia= req.params.id
    const queryString = "SELECT u.Nombres,b.Nombre,b.Direccion,b.Telefono,b.CantBarbero,b.Correo,b.Horarios FROM usuario AS u INNER JOIN barberias as b ON u.IdUsuario = b.Id_Usuario WHERE IdBarberia=?"
    pool.query(queryString, [Id_Barberia],(err, rows, fields) => {
        if(err){
            console.log("Servicio" + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Servicio Seleccionado")
        res.json(rows)
    })
});




Router.post('/add', async (req, res) =>{

    console.log("Tratando de agregar usuario..")
    console.log("Nombres: "+ req.body.nombres)
    console.log("Apellidos: "+ req.body.apellidos)
    console.log("Identidad: "+ req.body.identidad)
    console.log("Correo: "+ req.body.correo)
    console.log("Direccion: "+ req.body.direccion)
    console.log("Usuario: "+ req.body.usuario)
    console.log("Contraseña: "+ req.body.contraseña)
    console.log("IdRol: "+ req.body.idrol)

   
    const nombres = req.body.nombres
    const apellidos = req.body.apellidos
    const identidad = req.body.identidad
    const correo = req.body.correo
    const direccion = req.body.direccion
    const usuario = req.body.usuario
    const contraseña = req.body.contraseña
    const idrol = req.body.idrol


    const queryString = "INSERT INTO usuario (nombres, apellidos, identidad, correo, direccion, usuario, contraseña, idrol) VALUES (?,?,?,?,?,?,?,(SELECT idrol FROM rol WHERE idrol = ?)) "
    pool.query(queryString, [nombres, apellidos, identidad, correo, direccion, usuario, contraseña, idrol], (err, results, fields) =>{
        if (err){
            console.log("Error el usuario: "+ err)
            res.sendStatus(500)
            return
        }

        console.log("Se agrego usuario con id: ", results.insertId);
        res.json('ok');
        res.end() 
        
    } )
});



module.exports=Router;
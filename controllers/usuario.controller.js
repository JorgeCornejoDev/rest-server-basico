
const { response } = require('express');

const usuarioGet = ( req, res = response ) => {
    res.json({
        data: {
            msg: 'Esto es api-get-controlador'
        }   
    });
}
const usuarioPost = ( req, res = response ) => {

    const body = req.body;
    res.json({
        data: {
            msg: 'Esto es api-post-controlador',
            body
        }   
    });
}
const usuarioPut = ( req, res = response ) => {
    const { id } = req.params;

    res.json({
        data: {
            msg: 'Esto es api-put-controlador',
            id
        }   
    });
}
const usuarioPatch = ( req, res = response ) => {

    const { id } = req.params;
    res.json({
        data: {
            msg: 'Esto es api-patch-controlador',
            id
        }   
    });
}
const usuarioDelete  = ( req, res = response ) => {
    const { id } = req.params;
    res.json({
        data: {
            msg: 'Esto es api-delete-controlador',
            id
        }   
    });
}
module.exports = { 
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}
function validarId(id){
    return typeof id === 'number' && !isNaN(id) && id >= 1
}

function validarProvincia(entity){
    let respuesta = false
    if(entity){
        if (validaString(entity.name)
        && validaString(entity.full_name)
        && validaNum(entity.latitude)
        && validaNum(entity.longitude)
        && validaNum(entity.display_order)) respuesta = true
    }
    return respuesta
}

function validaString(cadena) {
    return typeof cadena === 'string' && cadena.trim().length > 0
}

function validaNum(cadena){
    return typeof cadena === 'number' && !isNaN(cadena)
}

export { validarId, validarProvincia }
let comparandoThis = function (params) {
    console.log(this === params)
}

comparandoThis(global) // true
comparandoThis(this) //false

const obj ={}
comparandoThis = comparandoThis.bind(obj)
comparandoThis(global) // false
comparandoThis(obj) // true

let comparandoThisComArrow = params => console.log(this === params)
comparandoThisComArrow(global) // false
comparandoThisComArrow(module.exports) // true
comparandoThisComArrow(this) // true

comparandoThisComArrow = comparandoThisComArrow.bind(obj)
comparandoThisComArrow(obj) // false
comparandoThisComArrow(module.exports) // true
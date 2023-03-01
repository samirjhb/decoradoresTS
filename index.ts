function Route(ruta: string) {
    return (constructor: Function) => {
        console.log("Ejecutando el decorador de ruta");
        constructor.prototype.route = ruta;
    }
}

function Method(method: string) {

    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        console.log(methodName, descriptor);
        const original = descriptor.value
        descriptor.value = function (...args: any) {
            console.log("antes del metodo ");
            original.call(this, ...args)
            console.log("despues del decorador ");
        }
    }
}

@Route("/productos")
class Productos {


    @Method("get")
    find(val: string) {
        console.log("Soy el metodo find" + val);


    }
}


const p = new Productos()
p.find(" hola mundo");

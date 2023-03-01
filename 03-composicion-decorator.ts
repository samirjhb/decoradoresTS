function Dec1(constructor:Function) {
    console.log('Decorador 1');
    
    
}

function Dec2(constructor:Function) {
    console.log('Decorador 2');
    
    
}


@Dec1
@Dec2
class User {
   
}

export{}
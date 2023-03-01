function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    const original = propertyDescriptor.get
    propertyDescriptor.get = function () {
        const r = original?.call(this)
        if (typeof r === "string") {
            return r.toUpperCase()
        }
        return r 
    }
}

function Min(min:number) {
    return (target: any, propertyName:string)=>{
        let val:string
        const descriptor: PropertyDescriptor={
            get(){
                return  val
            },
            set(v:string) {
                if (v.length<min) {
                    throw new Error(`La propiedad ${propertyName} debe ser de largo minimo ${min} `);                        
                }
                val = v
                
            },
        }
        Object.defineProperty( target, propertyName, descriptor) 
    }
    
}

class User {
    @Min(6)
    public password:string

    constructor(public name: string, public lastname:string, password:string) {
        this.password = password
    }

    @UpperCase
    get fullName(){
        return `${this.name} ${this.lastname}`
    }
}


const user = new User ('hola', "mundo", "123456")
console.log(user.password);

export{}

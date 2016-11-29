let typeCache:{[label:string]:boolean}={};

export function type<T>(label:T|''):T{
let typeCache:{[label:string]:boolean}={}
   if(typeCache[<string>label]){
    throw new Error(`Action type ${label} is not unique`)
   }
typeCache[<string>label]=true;
    return <T>label;
}
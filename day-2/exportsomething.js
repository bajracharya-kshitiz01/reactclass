

//expoeting variable (normal export)
export const PI=3.1415
//default export (Only one default export in a file)
let radius=30.4
export default radius


let a="Hello"
let b="All"


let calculateAreaofCircle=(r)=>{
return PI*r*r
}
export {calculateAreaofCircle,a,b}
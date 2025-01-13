function Button(){
    const handler = () => console.log("Oh Hi")
    const handler2 = (name) => console.log(`${name} Welcome`); 
    return(
        <button className = "btn" onClick = {() => handler2("TJ")}>Click me</button>
    )

}
export  default Button;
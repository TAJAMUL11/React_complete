import { useContext } from "react"
import { GlobalContext } from "../context/appContext"
const Footer = () => {
    const user = useContext(GlobalContext);
  return (
    <div>
        <h1>Footer</h1>
        <h3>My name is : {user.name}</h3>
    </div>
  )
}

export default Footer
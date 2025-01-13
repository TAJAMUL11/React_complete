import { useContext } from "react"
import { GlobalContext } from "../context/appContext"
const Contact = () => {
    const userNumber = useContext(GlobalContext);
  return (
    <div>
      <h1>Contact</h1>
      <h3>Phone number : {userNumber.number}</h3>
    </div>
  );
};

export default Contact;

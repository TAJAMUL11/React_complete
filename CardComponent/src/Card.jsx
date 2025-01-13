import profilePic from "./assets/man.png";
function Card(){

    return(
        <figure className = "card">
            <img src={profilePic} alt="profile picture" className="card-image"/>
            <figcaption className="card-title">Tajamul</figcaption>
            <p className="card-text">This is Tajamul Wani, fullstack dev</p>
        </figure>

    );


}
export default Card;
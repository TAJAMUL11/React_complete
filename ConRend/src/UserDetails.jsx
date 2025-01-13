function UserDetails(props){
    return(
        props.isLoggedIn ? <h3 className = "user">Hi {props.UserName}</h3> :
         <h3 className = "notUser">Please Sign in</h3>
    );

    //We can simply store the h3 elements in const and use varibales instead of usinng the jsx.
}

export default UserDetails;
function Nav_user_items(props){
    return(
        <li>
            <div className="user-icon">{props.icon}</div>
            <div className="user-profile">{props.name}</div>
        </li>
    );
}
export default Nav_user_items;
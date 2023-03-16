const MemberLink=(props)=>{
    return(
        <li className="members__socials__items">
        <a href={props.link} target="_blank" rel="noreferrer">
            <i className={`${props.iClass} members__socials__items__icon ${props.dot}`}></i>
        </a>
    </li>
    )
};export default MemberLink
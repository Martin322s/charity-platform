const Tags = ({ tags }) => {
    return (
        <ul>
            {tags.map(tag => 
                <li key={tag} className="tag">
                    {"#" + tag}
                </li>
            )}
        </ul>
    );
}

export default Tags;
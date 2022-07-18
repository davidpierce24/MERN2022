

const AuthorList = props => {

    return (
        <div>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
                {
                props.authors.map((author, i) => 
                    <tr key={i}>
                        <td>{author.name}</td>
                        <td>Edit | Delete</td>
                    </tr>
                )
            }
            </table>
            
        </div>
    )
}

export default AuthorList;
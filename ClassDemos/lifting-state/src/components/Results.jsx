

const Results = props => {

    return (
        <div>
            <h1>Results</h1>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Real Name</th>
                    <th>Power</th>
                    <th># of SideKicks</th>
                    <th>Is Alive?</th>
                    <th>Universe</th>
                </tr>
                {
                    props.Heros.map((hero) => {
                        return <tr>
                            <td>{ hero.name }</td>
                            <td>{ hero.realName }</td>
                            <td>{ hero.power }</td>
                            <td>{ hero.numSidekicks }</td>
                            <td>{ hero.isAlive ? "Alive" : "Deceased" }</td>
                            <td>{ hero.universe }</td>
                        </tr>
                    }

                    )
                }
            </table>
        </div>
    )
}

export default Results;
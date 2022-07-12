

const Results = props => {

    return (
        <div>
            <h1>Results</h1>
            <h3>{ props.myHero.name }</h3>
            <p>{ props.myHero.realName }, { props.myHero.power }, { props.myHero.numSidekicks }, { props.myHero.isAlive ? "Alive" : "Deceased" }, { props.myHero.universe }</p>
            
        </div>
    )
}

export default Results;
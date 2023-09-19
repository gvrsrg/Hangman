function Score(props){
    const getScoreClass = (score) => {
        return (score>=80?"high-score": (score<50? "low-score":"medium-score"))
    }
    let scoreClass = getScoreClass(props.gameScore.score)

    return (
        <div>
            <div className={scoreClass}>{props.gameScore.score}</div>
        </div>
    )
}

export default Score
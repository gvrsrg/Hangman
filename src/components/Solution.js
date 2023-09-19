import Letter from "./Letter"

function Solution(props){

    let word = [...props.solution.word]
    let letterStatus = props.letterStatus

    let placeholder = 
    word.map((l) =>
        { 
            return (
                (letterStatus[l.toUpperCase()]) ? l.toUpperCase() : "_"
                )
        }
    )

    return (
        <div class="solution">
            {placeholder.map( (l) => {return (
                <Letter mods={"letter unchecked"} letter={l} />
            )}
            )}
            <div>
                <em>{props.solution.hint}</em>
            </div>
        </div>
    )
}

export default Solution
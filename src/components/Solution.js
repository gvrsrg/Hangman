function Solution(props){

    let word = [...props.word]
    let letters = [...props.letters]

    let placeholder = 
    word.map((l) =>
        { console.log(l)
            return (
                (letters.includes(l)) ? l : "_"
                )
        }
    )

    return (
        <div class="solution">
            {placeholder.map( (l) => {return (
                <span class="letter"> {l} </span>
            )}
            )}
            <div>
                <em>{props.description}</em>
            </div>
        </div>
    )
}

export default Solution
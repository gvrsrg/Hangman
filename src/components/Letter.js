import classnames from 'classnames'

function Letter({mods, selectLetter, letter}){


    return (
            <span className={classnames(mods)} onClick={() => {selectLetter(letter)}}> {letter.toUpperCase()} </span>
            )
        
    
}
            

export default Letter
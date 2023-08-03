import classnames from 'classnames'

function Letter(props){


    return (
            <span className={classnames(props.mods)}> {props.letter.toUpperCase()} </span>
            )
        
    
}
            

export default Letter
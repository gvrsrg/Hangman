import Letter from "./Letter";

function Letters(props){
    let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

    return (
        <div>
            {alphabet.map( (l) => {
                let mods = "letter"+((props.letters.includes(l.toLowerCase()))?' checked':' unchecked' )
                return (
                    <Letter style={mods} letter={l} />
                )
                })
            }
        </div>
        
    )
    
}
            

export default Letters
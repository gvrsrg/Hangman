import Letter from "./Letter";

function Letters({letterStatus,selectLetter}){
    let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

    return (
        <div>
            {Object.keys(letterStatus).map( (l) => {
                let mods = "letter"+((letterStatus[l])?' checked':' unchecked' )
                return (
                    <Letter mods={mods} letter={l} selectLetter={selectLetter}/>
                )
                })
            }
        </div>
        
    )
    
}
            

export default Letters
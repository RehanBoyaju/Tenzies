export default function ({die,hold}) {

    function handleClick(event){
        const id = event.currentTarget.id

        // setDice(prevDice=> (
        //     prevDice.map( prevDie => {
        //         if(prevDie.id === id){
        //             console.log("flipped");
        //             return {...prevDie,isHeld:!prevDie.isHeld}
        //         }
        //         return {...prevDie,value:Math.ceil(Math.random() * 6),isHeld:false}
        //     })
        // ))

        hold(id);

        

    }
    return (
        // <button id={die.id} onClick={handleClick} className={die.isHeld?"die-held":undefined}>{die.value}</button>
        <button onClick={hold} className={die.isHeld?"die-held":undefined} aria-pressed={die.isHeld}
        aria-label={`Die with a value of ${die.value}, ${die.isHeld}?"Held":"Not held"`}>{die.value}</button>
    )
}
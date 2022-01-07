import React from 'react'




 function MemoComp({name}) {
    return (
        <div>
           { console.log('e')}
             {name}
        </div>
    )
}

export default MemoComp
//export default React.memo(MemoComp)
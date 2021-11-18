import Star from './Star'
import React, {useState} from 'react'

type PropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: PropsType) {

    let [star, setStar] = useState(0)

    return (
        <div>
            <Star selected={star >= 1}/><button onClick={() => setStar(1)}>1</button>
            <Star selected={star >= 2}/><button onClick={() => setStar(2)}>2</button>
            <Star selected={star >= 3}/><button onClick={() => setStar(3)}>3</button>
            <Star selected={star >= 4}/><button onClick={() => setStar(4)}>4</button>
            <Star selected={star === 5}/><button onClick={() => setStar(5)}>5</button>
        </div>


)
}






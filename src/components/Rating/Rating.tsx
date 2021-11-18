import Star from './Star'
import React from 'react'

type PropsType = {
    value: 0 | 1 | 2| 3 | 4 | 5
}

export function Rating(props: PropsType) {

    return (
        <div>
            <Star selected={ props.value > 0 }/><button>1</button>
            <Star selected={ props.value > 1 }/><button>2</button>
            <Star selected={ props.value > 2 }/><button>3</button>
            <Star selected={ props.value > 3 }/><button>4</button>
            <Star selected={ props.value > 4 }/><button>5</button>
        </div>
    )
}



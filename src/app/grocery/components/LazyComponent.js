import React ,{Suspense} from 'react'

const LazyComponent = ({component:Component,...rest}) =>{
    return(
        <React.Fragment>
            <Suspense fallback={<div>Loading</div>} >
                <Component {...rest} ></Component>
            </Suspense>
        </React.Fragment>
    )
}

export default LazyComponent;
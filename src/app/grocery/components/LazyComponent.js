import React ,{Suspense} from 'react';
import PropTypes from 'prop-types';

const LazyComponent = ({component:Component,...rest}) =>{
    return(
        <React.Fragment>
            <Suspense fallback={<div>Loading</div>} >
                <Component {...rest} ></Component>
            </Suspense>
        </React.Fragment>
    )
}

LazyComponent.propTypes = {
    component: PropTypes.object
  };

export default LazyComponent;
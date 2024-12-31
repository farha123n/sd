import React from 'react';
import PropTypes from 'prop-types';

const LInk = ({rou}) => {
    return (
        <li className='mr-16' key={rou.id} >
        <a href={rou.path}>{rou.name}</a>
       </li>
    );
};
 LInk.propTypes={
    rou:PropTypes.object
 }

export default LInk;
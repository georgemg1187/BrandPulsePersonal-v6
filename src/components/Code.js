import React from 'react'
import Group from './layout/Group';
import Button from './layout/Button';

const Code = ({style, title, value}) => {
    return (
        <Group className='my-3' style={style}>
            <h5 className='text-center'>{title}</h5>
            <textarea value={value} className="form-control mt-3" id="exampleTextarea" rows="5" spellCheck="false" readOnly style={{opacity: 1}}/>
            <Button className='btn-primary btn-block mt-3'>Copy</Button>
        </Group>
    )
}

export default Code
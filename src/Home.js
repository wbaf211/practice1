import React from 'react';
import Tab from './Tab';
import Header  from './Header';
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from '@ant-design/icons';

function Home({logOut, brand, setBrand, filter, handleInput}) {

    return (
        <div>
            <Header logOut={logOut} brand={brand} setBrand={setBrand} filter={filter} handleInput={handleInput}/>
            <div className='index-pagination'>
                <button><ArrowLeftOutlined /></button>
                <input value={1} disabled={true}></input>
                <button><ArrowRightOutlined /></button>
            </div>
            <Tab/>
        </div>
    );
}

export default Home
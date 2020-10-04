import React from 'react';
import { Footer, Navbar } from '../components';

const layout = (props) => (
    <div>
        <Navbar />
        <div style={{marginTop: '70px'}}>
            {props.children}
        </div>
        <Footer />
    </div>
)
 
export default layout;
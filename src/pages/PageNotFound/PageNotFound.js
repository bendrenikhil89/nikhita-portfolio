import React from 'react';
import {Link} from 'react-router-dom';
import pageNotFound from '../../assets/svgs/404.svg';

const PageNotFound = () => {
    const mainHeader = {
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 60px)',
        padding:'20px'
    };
    return (
        <>
            <div style={{...mainHeader}}>
                <img src={pageNotFound} style={{height:'350px', width:'100%'}} />
            </div>
            <p style={{textAlign:'center',marginTop:'-200px'}}><Link to="/"><input type="submit" className="contact__send-message" value="Go Back" /></Link></p>
        </>
    )
}

export default PageNotFound

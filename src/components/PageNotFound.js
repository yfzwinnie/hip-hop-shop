import React from 'react';

class PageNotFound extends React.Component {
    render() {
        return(
            <div className="pre-loader">
                <h1 className="pnf-header">4</h1>
                <div className="css-vinyl-loader">
                    <div className="inner-ring-1"></div>
                    <div className="inner-ring-2"></div>
                    <div className="inner-circle"></div> 
                </div>
                <h1 className="pnf-header">4</h1>
                <p>Oh snap, we didn't find the page you were looking for</p>
            </div>
        )
    }
}

export default PageNotFound;
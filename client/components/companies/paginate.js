'use strict'; 
import React from 'react';

export default React.createClass({
  paginate(type, e) {
    if(e) e.preventDefault();
    this.props.onChange(type);
  },

  render() {
    return (
      <div className="btn-group">
              <button 
                className="btn-group__btn" 
                onClick={this.paginate.bind(this, 'less')}> 
                <i className="ion-chevron-left"></i> 
              </button>

              <button 
                className="btn-group__btn" 
                onClick={this.paginate.bind(this, 'more')}> 
                <i className="ion-chevron-right"></i> 
              </button>
              
            </div>
    )
  }
});
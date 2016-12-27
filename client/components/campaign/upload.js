import React from 'react';
import request from 'axios';

const upload = React.createClass({
	handleFile(e) {
		var data = new FormData();
    data.append('file', e.currentTarget.files[0]);
		 var config = {
      	onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
				console.log(percentCompleted);
      }
    };

		request
		.post('/api/v1/upload', data, config)
    .then(res => this.props.onChange(res.data))
	},

	render() {
		return (
			<div>
				<input type="file" onChange={this.handleFile} />
			</div>
			
		)
	}
});

export default upload;
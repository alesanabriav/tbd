'use strict';
import React from 'react';
import Quill from 'quill';
import uid from 'uid';

export default React.createClass({
  getInitialState() {
    return {
      id: `editor-${ uid() }`,
      idToolbar: `toolbar-${ uid() }`,
      editor: {},
      value: ''
    }
  },

  getDefaultProps() {
    return {
      style: {}
    }
  },

  componentDidMount() {
    let editor = this.mountQuill();
    this.setState({editor});
  },

  mountQuill() {
		var toolbarOptions = [
       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			['bold', 'italic'], 
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean'] 
		];
    let editor = new Quill(`#${this.state.id}`, {
      modules: {
				toolbar: toolbarOptions
			},
       theme: 'snow'
    });
    
	
		this.getChanges(editor);

    return editor;
  },
  
  getChanges(editor) {
     editor.on('text-change', () => {
      let html = document.querySelector(`#${this.state.id}`).querySelector(`.ql-editor`).innerHTML;
      this.handleChange(html);
    });
  },

  setContent(html) {
    let editor = this.state.editor;
    let range = editor.getSelection();
    editor.setHTML(html)
    editor.setSelection(range);
  },

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      this.setContent(props.value);
    }
  },

  handleChange(html) {
    if(typeof this.props.onChange === 'function') {
      return this.props.onChange(html);
    }
  },

  getEditorContents() {
		return this.props.value || this.props.defaultValue || '';
	},
  
  shouldComponentUpdate() {
		// Never re-render or we lose the element.
		return false
	},

	insertImage(url) {
    this.state.editor.focus();
		let range = this.state.editor.getSelection();
		this.state.editor.insertEmbed(range, 'image', url);
	},

  render() {
    return (
      <div className="editor" id={this.state.id} style={this.props.style}>
         <div dangerouslySetInnerHTML={{__html: this.getEditorContents()}} />
      </div>
    )
  }
});

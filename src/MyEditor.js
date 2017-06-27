import React, { Component } from 'react';
import ReactQuill from 'react-quill';

import '../node_modules/quill/dist/quill.snow.css';


const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option selected></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-strike"></button>
    <button className="ql-underline"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select>
    <button className="ql-test">
      <span>Test</span>
    </button>    
  </div>
)

function test(){
  console.log('test');
  //How to call the 
}

/**
 * Basic Editor
 */
class MyEditor extends Component {

    constructor(props) {
        super(props)
        this.state={text:''}
    }

    onTextChange(value) { 
        this.setState({text:value})
    }

    addGanhamStyle(){
      const editor = this.reactQuillRef.getEditor();
      const index = editor.getSelection().index || 0;
      editor.insertText(index + 1, 'Ganham Style!!!!');
      editor.insertText(index + 1, '\n');
    }

    render(){
        return (
            <div>
                <CustomToolbar />
                <ReactQuill
                  ref={(el) => { this.reactQuillRef = el; }}
                  value={this.state.body}
                  onChange={this.handleChange}
                  modules={MyEditor.modules}
                  formats={MyEditor.formats}
                  theme="snow"
                />
             </div>
        )
    }

}

MyEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color',
]

MyEditor.modules = {
  toolbar: {
    container: "#toolbar",
    'image-tooltip': true,
    'link-tooltip': true,
    handlers:{
      test: test
    }
  }
}

export default MyEditor;
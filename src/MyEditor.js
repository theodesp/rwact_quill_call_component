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

/**
 * Basic Editor
 */
class MyEditor extends Component {

    constructor(props) {
        super(props)
        this.state={text:''}

        var self=this;//Usefull to bind the method
        this.modules = {
          toolbar: {
            container: "#toolbar",
            'image-tooltip': true,
            'link-tooltip': true,
            handlers:{
              test: this.addGanhamStyle.bind(self),
            }
          }
        }

        this.reactQuillRef=null;
    }

    onTextChange(value) { 
        this.setState({text:value})
    }

    addGanhamStyle(){
      const editor = this.reactQuillRef.getEditor();
      const index = editor.getSelection().index || 0;
      editor.insertText(index, 'Ganham Style!!!!');
      editor.insertText(index + 1, '\n');
      console.log("Ganham Style");
    }

    render(){
      return (
        <div>
         <CustomToolbar />
         <ReactQuill
            ref = { (el) => { this.reactQuillRef = el; } }
            value = {this.state.body}
            onChange = {this.handleChange}
            modules = {this.modules}
            formats = {MyEditor.formats}
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

export default MyEditor;
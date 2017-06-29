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
    <button className="ql-vimeo">
        <span className="toolbar-space">Vimeo</span>
    </button>
    <button className="ql-dailyMotion">
        <span className="toolbar-space" >Dailymotion</span>
    </button>
    <button className="ql-youtube" >
      <span className="toolbar-space" >Youtube</span>
    </button>
    <button className="ql-facebook">
       <span className="toolbar-space">Facebook</span>
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
              dailyMotion: this.insertDailyMotion.bind(self),
              youtube: this.insertYoutube.bind(self),
              vimeo: this.insertVimeo.bind(self),
              facebook: this.insertFacebook.bind(self)
            }
          }
        }

        this.reactQuillRef=null;
    }

    onTextChange(value) { 
        this.setState({text:value})
    }

    insertVideo(video) {
        const editor = this.reactQuillRef.getEditor();
        const index = editor.getSelection().index || 0;
        // editor.insertEmbed(index, 'video', video);
        // editor.format('width',1000);
        // editor.format('height',1000);
       const delta= [
         {
           insert: {
            video: video,
            attributes: {
              width: 900,
              height: 900
            }
         }
        },
       ]
       editor.updateContents(delta);
    }

    insertDailyMotion(){
      this.insertVideo("//www.dailymotion.com/embed/video/x5rx12e");
    }

    insertYoutube(){
      this.insertVideo("https://www.youtube.com/embed/1rDQccuLEvY?ecver=2");
    }

    insertVimeo(){
      this.insertVideo("https://player.vimeo.com/video/221105534");
    }

    insertFacebook(){
      this.insertVideo("https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fenikosgr%2Fposts%2F1427262130644621&width=500")
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
  'link', 'image', 'color','script','video'
]

export default MyEditor;
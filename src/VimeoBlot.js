import {Quill} from 'react-quill';

let BlockEmbed = Quill.import('blots/block/embed');

class VimeoBlot extends BlockEmbed {
    constructor(){
        super();
        this.blotName='vimeo',
        this.tagName='iframe'
    }

    static create(value) {
     let node = super.create();
     
     node.setAttribute('src', value);
     node.setAttribute('frameborder', '0');
     node.setAttribute('allowfullscreen', true);
     
     return node;
    }

    static value(node) {
     return node.getAttribute('src');
    }

}
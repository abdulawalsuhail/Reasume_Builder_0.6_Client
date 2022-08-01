import JoditEditor from 'jodit-react';
import React, { useRef } from 'react';
import '../../../Css/CarrerEditor.css';

const config = {
    buttons: ["bold", "italic" ,'underline', 'fontsize',],
  };


const EditorComponent = ({initialValue, getValue }) => {
    const editor = useRef(null);
    // const [content, setContent] = useState('');
 
    return (
        <JoditEditor
        ref={editor}
        value={initialValue}
        config={config}
        tabIndex={2}
        //   onBlur={(newContent) => getValue(newContent)}
        
        onChange={(newContent) => getValue(newContent)}
      />
    );
};

export default EditorComponent;
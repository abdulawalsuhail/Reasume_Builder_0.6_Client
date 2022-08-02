import JoditEditor from 'jodit-react';
import React, { useRef } from 'react';
import '../../../Css/CarrerEditor.css';

const config2 = {
  useSearch: false,
  spellcheck: false,
  enter: "P",
  defaultMode: "1",
  toolbarAdaptive: false,
  toolbarSticky: false,
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  askBeforePasteHTML: false,
  askBeforePasteFromWord: false,
  minHeight: 400,
  maxHeight: 400,
  minWidth: 400,
  maxWidth: 400,
  buttons:
    "bold,italic,underline,fontsize,undo,redo",
  editorCssClass: "alic",
  placeHolder: "",
  controls: {
    fontsize: {
      list: [
        "8",
        "9",
        "10",
        "11",
        "12",
        "14",
        "16",
        "18",
        "24",
        "30",
        "36",
        "48",
        "60",
        "72",
        "96",
        "100"
      ]
    },
    font: {
      command: "fontname",
      list: {
        "": "Default",
        "'Open Sans',sans-serif": "Open Sans",
        "Helvetica,sans-serif": "Helvetica",
        "Arial,Helvetica,sans-serif": "Arial",
        "Georgia,serif": "Georgia",
        "Impact,Charcoal,sans-serif": "Impact",
        "Tahoma,Geneva,sans-serif": "Tahoma",
        "'Times New Roman',Times,serif": "Times New Roman",
        "Verdana,Geneva,sans-serif": "Verdana"
      }
    }
  }
};


const EditorComponent = ({initialValue, getValue }) => {
    const editor = useRef(null);
    // const [content, setContent] = useState('');
 
    return (
        <JoditEditor
        ref={editor}
        value={initialValue}
        config={config2}
        tabIndex={1}
        onChange={(newContent) => getValue(newContent)}
      />
    );
};

export default EditorComponent;
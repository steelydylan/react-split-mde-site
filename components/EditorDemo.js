import { useState, useEffect } from "react"
import { Editor } from "zenn-mde"
import "zenn-mde/css/editor.css"
import "zenn-content-css"
import markdownHTML, { enablePreview } from "zenn-markdown-html";
import markdown from "./markdown.txt";
enablePreview();

const defaultValue = markdown;

export const EditorDemo = () => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    import("zenn-embed-elements");
  }, [])

  const handleValueChange = (newValue) => {
    setValue(newValue);
  }
  return (<div className="editor-demo">
    <Editor 
      previewClassName="znc"
      value={value} 
      parser={markdownHTML}
      onChange={handleValueChange} 
      previewCallback={{
        onBeforeNodeDiscarded(node) {
          if (node.closest && !node.classList.contains("embed-tweet") &&
          node.closest(".embed-tweet")) {
            return false
          }
          return true
        }
      }}
    />
  </div>)
}

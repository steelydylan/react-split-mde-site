import { useState, useEffect } from "react"
import { Editor } from "react-split-mde"
import "react-split-mde/css/index.css"
import markdown from "./markdown.txt";

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
      value={value} 
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

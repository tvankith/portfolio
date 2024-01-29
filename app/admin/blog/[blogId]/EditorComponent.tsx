"use client"
import { MDXEditor, MDXEditorMethods, MDXEditorProps, headingsPlugin } from "@mdxeditor/editor"
import { FC, useEffect, useLayoutEffect, useState } from 'react'

type EditorProps = MDXEditorProps & {
  markdown: string
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs. 
*/
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {

  const [render, setRender] = useState(false)

  useLayoutEffect(()=>{
    setRender(true)
  },[])

  return render && <MDXEditor
    ref={editorRef}
    markdown={markdown}
    plugins={[headingsPlugin()]} 
    onChange={()=>{

    }}
    />
}

export default Editor
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "w-full h-full p-4",
      },
    },
    extensions: [StarterKit],
    content: "",
  });

  return <EditorContent className="w-full h-full" editor={editor} />;
};

export default Editor;

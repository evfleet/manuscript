import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "h-full w-full p-4",
      },
    },
    extensions: [StarterKit],
    content: "",
  });

  return <EditorContent className="h-full w-full" editor={editor} />;
};

export default Editor;

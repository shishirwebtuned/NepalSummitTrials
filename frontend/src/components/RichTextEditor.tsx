// components/RichTextEditor.tsx
'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TbBold, TbItalic, TbList, TbListNumbers } from 'react-icons/tb'

export default function RichTextEditor({
    value,
    onChange,
    placeholder = 'Write here...',
}: {
    value: string | undefined
    onChange: (html: string) => void
    placeholder?: string
}) {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: false,
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class:
                    'prose prose-sm max-w-none outline-none min-h-[80px] text-sm text-slate-700 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5',
            },
        },
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
    })

    if (!editor) return null

    const btn = (active: boolean) =>
        `p-1.5 rounded-lg transition ${active ? 'bg-[#0A5482]/10 text-[#0A5482]' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
        }`

    return (
        <div className="border border-slate-200 rounded-xl bg-slate-50/50 focus-within:border-[#0A5482]/40 focus-within:bg-white transition">
            <div className="flex items-center gap-1 border-b border-slate-100 px-2 py-1.5">
                <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btn(editor.isActive('bold'))}>
                    <TbBold className="text-base" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(editor.isActive('italic'))}>
                    <TbItalic className="text-base" />
                </button>
                <div className="w-px h-4 bg-slate-200 mx-1" />
                <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(editor.isActive('bulletList'))}>
                    <TbList className="text-base" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(editor.isActive('orderedList'))}>
                    <TbListNumbers className="text-base" />
                </button>
            </div>
            <div className="px-3.5 py-2.5">
                <EditorContent editor={editor} placeholder={placeholder} />
            </div>
        </div>
    )
}
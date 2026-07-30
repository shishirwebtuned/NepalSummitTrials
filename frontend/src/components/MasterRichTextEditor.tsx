// components/MasterRichTextEditor.tsx
'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import {
    TbBold,
    TbItalic,
    TbH1,
    TbH2,
    TbList,
    TbListNumbers,
    TbQuote,
    TbLink,
    TbPhoto,
    TbArrowBackUp,
    TbArrowForwardUp,
} from 'react-icons/tb'

type Variant = 'simple' | 'full'

type MasterRichTextEditorProps = {
    value: string
    onChange: (html: string) => void
    placeholder?: string
    variant?: Variant
    minHeightClass?: string
}

export default function MasterRichTextEditor({
    value,
    onChange,
    placeholder = 'Write here...',
    variant = 'simple',
    minHeightClass,
}: MasterRichTextEditorProps) {
    const isFull = variant === 'full'

    const editor = useEditor({
        immediatelyRender: false, // required for Next.js SSR, avoids hydration mismatch
        extensions: [
            StarterKit.configure({
                heading: isFull ? {} : false, // headings only make sense for full/blog content
            }),
            ...(isFull
                ? [
                    Link.configure({
                        openOnClick: false,
                        HTMLAttributes: { class: 'text-[#0A5482] underline underline-offset-2' },
                    }),
                    Image.configure({
                        HTMLAttributes: { class: 'rounded-xl max-w-full' },
                    }),
                ]
                : []),
            Placeholder.configure({ placeholder }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class:
                    `prose prose-sm max-w-none outline-none ${minHeightClass ?? (isFull ? 'min-h-[320px]' : 'min-h-[80px]')} text-sm text-slate-700 leading-relaxed ` +
                    '[&_h1]:text-xl [&_h1]:font-bold [&_h1]:mt-4 [&_h1]:mb-2 ' +
                    '[&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-3 [&_h2]:mb-2 ' +
                    '[&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 ' +
                    '[&_blockquote]:border-l-4 [&_blockquote]:border-slate-200 [&_blockquote]:pl-3 [&_blockquote]:italic [&_blockquote]:text-slate-500',
            },
        },
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
    })

    if (!editor) return null

    const btn = (active: boolean) =>
        `p-1.5 rounded-lg transition ${active ? 'bg-[#0A5482]/10 text-[#0A5482]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
        }`

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('Enter URL', previousUrl || 'https://')
        if (url === null) return // cancelled
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }

    const addImage = () => {
        const url = window.prompt('Image URL')
        if (url) editor.chain().focus().setImage({ src: url }).run()
    }

    return (
        <div className="border border-slate-200 rounded-xl bg-slate-50/50 focus-within:border-[#0A5482]/40 focus-within:bg-white transition">
            <div className="flex flex-wrap items-center gap-1 border-b border-slate-100 px-2 py-1.5">
                <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btn(editor.isActive('bold'))} title="Bold">
                    <TbBold className="text-base" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(editor.isActive('italic'))} title="Italic">
                    <TbItalic className="text-base" />
                </button>

                {isFull && (
                    <>
                        <div className="w-px h-4 bg-slate-200 mx-1" />
                        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={btn(editor.isActive('heading', { level: 1 }))} title="Heading 1">
                            <TbH1 className="text-base" />
                        </button>
                        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btn(editor.isActive('heading', { level: 2 }))} title="Heading 2">
                            <TbH2 className="text-base" />
                        </button>
                    </>
                )}

                <div className="w-px h-4 bg-slate-200 mx-1" />
                <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(editor.isActive('bulletList'))} title="Bullet list">
                    <TbList className="text-base" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(editor.isActive('orderedList'))} title="Numbered list">
                    <TbListNumbers className="text-base" />
                </button>

                {isFull && (
                    <>
                        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btn(editor.isActive('blockquote'))} title="Quote">
                            <TbQuote className="text-base" />
                        </button>
                        <div className="w-px h-4 bg-slate-200 mx-1" />
                        <button type="button" onClick={setLink} className={btn(editor.isActive('link'))} title="Link">
                            <TbLink className="text-base" />
                        </button>
                        <button type="button" onClick={addImage} className={btn(false)} title="Insert image">
                            <TbPhoto className="text-base" />
                        </button>
                        <div className="w-px h-4 bg-slate-200 mx-1" />
                        <button type="button" onClick={() => editor.chain().focus().undo().run()} className={btn(false)} title="Undo">
                            <TbArrowBackUp className="text-base" />
                        </button>
                        <button type="button" onClick={() => editor.chain().focus().redo().run()} className={btn(false)} title="Redo">
                            <TbArrowForwardUp className="text-base" />
                        </button>
                    </>
                )}
            </div>
            <div className="px-3.5 py-2.5">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}
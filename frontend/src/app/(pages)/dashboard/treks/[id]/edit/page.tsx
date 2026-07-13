// app/(pages)/dashboard/treks/[id]/edit/page.tsx
import { getTrek } from '../../actions'
import { notFound } from 'next/navigation'
import EditTrekForm from './EditTrekForm'

export default async function EditTrekPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    let trek
    try {
        trek = await getTrek(id)
    } catch {
        notFound()
    }

    if (!trek) notFound()

    return <EditTrekForm trek={trek} />
}
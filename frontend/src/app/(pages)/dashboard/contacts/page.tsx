// app/(pages)/dashboard/contacts/page.tsx
import { createClient } from '@/lib/supabase/server'
import ContactsTable from './Components/ContactsTable'

export default async function ContactsPage() {
    const supabase = await createClient()

    const { data: contacts } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })

    return <ContactsTable contacts={contacts || []} />
}
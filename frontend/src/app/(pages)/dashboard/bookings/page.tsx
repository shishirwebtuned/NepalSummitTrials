import { getBookings } from './actions'
import BookingsTable from './BookingsTable'

export default async function BookingsPage() {
    const bookings = await getBookings()

    return <BookingsTable bookings={bookings ?? []} />
}

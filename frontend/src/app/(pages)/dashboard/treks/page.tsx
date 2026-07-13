import { getTreks } from './actions'
import TreksTable from './Components/TreksTable'

export default async function TreksPage() {
    const treks = await getTreks()

    return <TreksTable treks={treks} />
}

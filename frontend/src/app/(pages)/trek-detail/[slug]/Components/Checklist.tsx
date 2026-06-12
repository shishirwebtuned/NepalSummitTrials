import { FaArrowRight } from "react-icons/fa";

const checklistData = [
  {
    title: "Important documents and items",
    items: [
      "Valid passport, 2 extra passport size photos, airline tickets",
      "Separate photocopies of passport, visa form (easily obtained at Kathmandu airport), proof of insurance",
      "Dollars, pounds or Euros in cash for purchasing Nepalese visa at Kathmandu airport, for paying for restaurants and hotels, for gratuities, snacks, and to purchase your own drinks and gifts",
      "Credit cards, Bank/ATM/Cash machine cards for withdrawing funds from cash machines (bring a photocopy of your cards), traveler’s checks, etc.",
    ],
  },
  {
    title: "Head",
    items: [
      "Bandana or headscarf, also useful for dusty conditions",
      "A warm hat that covers your ears (wool or synthetic)",
      "Sun cap",
      "Headlamp with extra batteries and bulbs",
      "Sunglasses with UV protection",
      "Prescription sunglasses (if required)",
    ],
  },
];

export default function Checklist() {
  return (
    <div className=" px-4 py-5">
      <h2 className="lg:text-2xl md:text-xl text-lg font-semibold mb-5">
        Checklist
      </h2>
      {checklistData.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="lg:text-lg md:text-base text-sm font-semibold mb-4">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-800">
                <span className="text-[#D5E880] mt-1">
                  <FaArrowRight size={14} />
                </span>
                <span className="lg:text-sm md:text-xs text-xs">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

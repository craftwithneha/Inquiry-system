
// types + dummy data

export type Location = {
  id: string
  image: string
  mapLink: string
  name: string
  inquiries: number
  reservations: number
  overall: string
  status: "Active" | "Inactive"
  minCapacity: number
  maxCapacity: number
  address: string
  primaryPhone: string
  secondaryPhone?: string
  attributes: string[]
  eventTypes: string[]
}

export const locations: Location[] = [
  {
    id: "1",
    image: "/location1.jpg",
    mapLink: "https://maps.google.com",
    name: "Beach Resort",
    inquiries: 12,
    reservations: 8,
    overall: "4.5/5",
    status: "Active",
    minCapacity: 50,
    maxCapacity: 200,
    address: "123 Beach Road",
    primaryPhone: "123-456-7890",
    secondaryPhone: "987-654-3210",
    attributes: ["Pool", "Garden", "Parking"],
    eventTypes: ["Wedding", "Birthday", "Party", "Conference"],
  },
  {
    id: "2",
    image: "/location2.jpg",
    mapLink: "https://maps.google.com",
    name: "Mountain Hall",
    inquiries: 6,
    reservations: 3,
    overall: "4.0/5",
    status: "Inactive",
    minCapacity: 30,
    maxCapacity: 120,
    address: "45 Hilltop Avenue",
    primaryPhone: "111-222-3333",
    secondaryPhone: "",
    attributes: ["Scenic View", "WiFi"],
    eventTypes: ["Wedding", "Conference"],
  },
  {
    id: "3",
    image: "/location3.jpg",
    mapLink: "https://maps.google.com",
    name: "City Banquet Hall",
    inquiries: 18,
    reservations: 12,
    overall: "4.7/5",
    status: "Active",
    minCapacity: 40,
    maxCapacity: 300,
    address: "78 Main Street",
    primaryPhone: "222-333-4444",
    secondaryPhone: "333-444-5555",
    attributes: ["Stage", "AC", "Valet Parking"],
    eventTypes: ["Conference", "Wedding", "Corporate Event"],
  },
  {
    id: "4",
    image: "/location4.jpg",
    mapLink: "https://maps.google.com",
    name: "Lakeside Pavilion",
    inquiries: 9,
    reservations: 5,
    overall: "4.2/5",
    status: "Active",
    minCapacity: 25,
    maxCapacity: 150,
    address: "56 Lake Road",
    primaryPhone: "444-555-6666",
    secondaryPhone: "",
    attributes: ["Lake View", "Open Air", "WiFi"],
    eventTypes: ["Birthday", "Wedding"],
  },
  {
    id: "5",
    image: "/location5.jpg",
    mapLink: "https://maps.google.com",
    name: "Skyline Terrace",
    inquiries: 14,
    reservations: 7,
    overall: "4.3/5",
    status: "Inactive",
    minCapacity: 20,
    maxCapacity: 100,
    address: "99 Tower Street",
    primaryPhone: "555-111-2222",
    secondaryPhone: "444-111-9999",
    attributes: ["Rooftop", "Scenic View"],
    eventTypes: ["Party", "Corporate Event"],
  },
]

// generate more up to 60
for (let i = 6; i <= 60; i++) {
  locations.push({
    id: i.toString(),
    image: `/location${i}.jpg`,
    mapLink: "https://maps.google.com",
    name: `Venue ${i}`,
    inquiries: Math.floor(Math.random() * 20) + 1,
    reservations: Math.floor(Math.random() * 15),
    overall: `${(Math.random() * (5 - 3.5) + 3.5).toFixed(1)}/5`,
    status: Math.random() > 0.5 ? "Active" : "Inactive",
    minCapacity: Math.floor(Math.random() * 50) + 20,
    maxCapacity: Math.floor(Math.random() * 300) + 100,
    address: `${i * 10} Example Street`,
    primaryPhone: `555-000-${1000 + i}`,
    secondaryPhone: i % 2 === 0 ? `555-999-${2000 + i}` : "",
    attributes: ["WiFi", "Parking", "Catering"].filter(() => Math.random() > 0.4),
    eventTypes: ["Wedding", "Birthday", "Conference", "Corporate Event", "Party"].filter(
      () => Math.random() > 0.5
    ),
  })
}

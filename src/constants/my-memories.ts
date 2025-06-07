export type MemoryItem = {
  id: string;
  type: "image" | "video" | "text";
  content: string;
  title?: string;
  thumbnail?: string;
};

export type MemorySection = {
  id: string;
  sectionTitle: string;
  description?: string;
  memories: MemoryItem[];
};

export const memorySections: MemorySection[] = [
  {
    id: "paris-2024",
    sectionTitle: "Paris Trip • Dec 2024",
    description: "High intensity adventure",
    memories: [
      {
        id: "1",
        type: "image",
        content: "https://picsum.photos/400/600?random=1",
        title: "Eiffel Tower",
      },
      {
        id: "2",
        type: "video",
        content: "https://picsum.photos/400/600?random=2",
        thumbnail: "https://picsum.photos/400/600?random=2",
        title: "Seine River",
      },
      {
        id: "3",
        type: "text",
        content: "The croissants here are absolutely incredible! Every morning we'd walk to the local bakery and the smell would fill the entire street. Pure magic.",
        title: "Morning Café",
      },
      {
        id: "4",
        type: "image",
        content: "https://picsum.photos/400/600?random=4",
        title: "Louvre Visit",
      },
    ],
  },
  {
    id: "college-memories",
    sectionTitle: "College Days • 2023-2024",
    description: "Medium intensity nostalgia",
    memories: [
      {
        id: "5",
        type: "image",
        content: "https://picsum.photos/400/600?random=5",
        title: "Graduation Day",
      },
      {
        id: "6",
        type: "video",
        content: "https://picsum.photos/400/600?random=6",
        thumbnail: "https://picsum.photos/400/600?random=6",
        title: "Final Project",
      },
      {
        id: "7",
        type: "text",
        content: "Late night study sessions in the library became our second home. The friendships formed over shared stress and coffee will last forever.",
        title: "Library Nights",
      },
    ],
  },
  {
    id: "family-gatherings",
    sectionTitle: "Family Time • Various",
    description: "High emotional intensity",
    memories: [
      {
        id: "8",
        type: "image",
        content: "https://picsum.photos/400/600?random=8",
        title: "Family Dinner",
      },
      {
        id: "9",
        type: "video",
        content: "https://picsum.photos/400/600?random=9",
        thumbnail: "https://picsum.photos/400/600?random=9",
        title: "Birthday Party",
      },
      {
        id: "10",
        type: "text",
        content: "Grandma's stories never get old. Every Sunday dinner brings new tales from her youth and wisdom that shapes our family values.",
        title: "Sunday Stories",
      },
      {
        id: "11",
        type: "image",
        content: "https://picsum.photos/400/600?random=11",
        title: "Holiday Photo",
      },
    ],
  },
  {
    id: "beach-summer",
    sectionTitle: "Summer Beach • Jul 2024",
    description: "Low intensity relaxation",
    memories: [
      {
        id: "12",
        type: "image",
        content: "https://picsum.photos/400/600?random=12",
        title: "Sunset Beach",
      },
      {
        id: "13",
        type: "video",
        content: "https://picsum.photos/400/600?random=13",
        thumbnail: "https://picsum.photos/400/600?random=13",
        title: "Beach Volleyball",
      },
    ],
  },
];
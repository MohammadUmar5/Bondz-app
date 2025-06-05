import { Collection } from '../types';

export const collections: Collection[] = [
  {
    tag: "#Travel",
    memories: [
      { id: "1", image: "https://picsum.photos/id/1018/300/400" },
      { id: "2", image: "https://picsum.photos/id/1025/300/350" },
      { id: "3", image: "https://picsum.photos/id/1027/300/420" },
      { id: "4", image: "https://picsum.photos/id/1031/300/400" },
      { id: "5", image: "https://picsum.photos/id/1045/300/380" },
    ],
    contributors: 3,
    lastUpdated: "2 hours ago",
    isActive: true,
    gradient: ["#FF6B6B", "#4ECDC4"],
    category: "Adventure",
  },
  {
    tag: "#Food",
    memories: [
      { id: "6", image: "https://picsum.photos/id/1080/300/350" },
      { id: "7", image: "https://picsum.photos/id/1084/300/400" },
      { id: "8", image: "https://picsum.photos/id/1081/300/400" },
      { id: "9", image: "https://picsum.photos/id/1082/300/360" },
      { id: "10", image: "https://picsum.photos/id/1083/300/420" },
    ],
    contributors: 7,
    lastUpdated: "1 day ago",
    isActive: false,
    gradient: ["#FF9A9E", "#FECFEF"],
    category: "Culinary",
  },
  {
    tag: "#Nature",
    memories: [
      { id: "11", image: "https://picsum.photos/id/1050/300/400" },
      { id: "12", image: "https://picsum.photos/id/1051/300/350" },
      { id: "13", image: "https://picsum.photos/id/1052/300/420" },
      { id: "14", image: "https://picsum.photos/id/1053/300/400" },
      { id: "15", image: "https://picsum.photos/id/1054/300/380" },
    ],
    contributors: 12,
    lastUpdated: "30 minutes ago",
    isActive: true,
    gradient: ["#A8E6CF", "#7FCDCD"],
    category: "Outdoor",
  },
  {
    tag: "#Art",
    memories: [
      { id: "16", image: "https://picsum.photos/id/1060/300/400" },
      { id: "17", image: "https://picsum.photos/id/1061/300/350" },
    ],
    contributors: 5,
    lastUpdated: "5 hours ago",
    isActive: true,
    gradient: ["#FFD93D", "#FF6B6B"],
    category: "Creative",
  },
  {
    tag: "#Music",
    memories: [
      { id: "18", image: "https://picsum.photos/id/1070/300/400" },
      { id: "19", image: "https://picsum.photos/id/1071/300/350" },
    ],
    contributors: 8,
    lastUpdated: "3 hours ago",
    isActive: true,
    gradient: ["#667eea", "#764ba2"],
    category: "Entertainment",
  },
];

export const trendingCollections = collections.filter((c) => c.isActive).slice(0, 4);
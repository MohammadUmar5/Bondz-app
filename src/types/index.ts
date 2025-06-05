export type Memory = {
    id: string;
    image: string;
  };
  
  export type Collection = {
    tag: string;
    memories: Memory[];
    contributors: number;
    lastUpdated: string;
    isActive: boolean;
    gradient: string[];
    category: string;
  };
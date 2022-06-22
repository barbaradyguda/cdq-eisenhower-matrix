import { Task } from "./model";
import { ItemTypes } from "./ItemTypes";

export let initialValuesUI: Task[] = [
  {
    urgent: true,
    important: true,
    id: 1,
    title: "Respond to angry customer",
    comment:
      "Angry custromer made a complaint about the slow handling of his order",
    deadline: new Date(),
    category: "customer service",
    isDone: false,
    accepts: [ItemTypes.DIV],
  },
  {
    urgent: true,
    important: true,
    id: 2,
    title: "Send an offer to Audi",
    comment:
      "offer prepared by Mrs. Elżbieta Białkiewicz - correction required before sending the email.",
    deadline: new Date(),
    category: "customer service",
    isDone: false,
    accepts: [ItemTypes.DIV],
  },
];

export let initialValuesU: Task[] = [
  {
    urgent: true,
    important: false,
    id: 3,
    title: "Hire new employee",
    comment:
      "A designers team really NEEDS someone to help with flowers shop website",
    deadline: new Date(),
    category: "employees",
    isDone: false,
    accepts: [ItemTypes.DIV],
  },
  {
    urgent: true,
    important: false,
    id: 4,
    title: "Book conference hotel",
    comment: "For about 40 people",
    deadline: new Date(),
    category: "meetings",
    isDone: false,
    accepts: [ItemTypes.DIV],
  },
];

export let initialValuesI: Task[] = [
  {
    urgent: false,
    important: true,
    id: 5,
    title: "Learn about SEO",
    category: "education",
    isDone: false,
    accepts: [ItemTypes.DIV],
  },
  {
    urgent: false,
    important: true,
    id: 6,
    title: "Find new personal trainer",
    category: "sport",
    isDone: false,
    accepts: [ItemTypes.DIV],
  },
];

export let initialValuesO: Task[] = [
  {
    urgent: false,
    important: false,
    id: 7,
    title: "Buy new coffee machine",
    comment: "philips?",
    category: "private",
    isDone: false,
    accepts: [ItemTypes.DIV],
  },
  {
    urgent: false,
    important: false,
    id: 8,
    title: "Read new articles on uxdesign.",
    category: "education",
    isDone: false,
    accepts: [ItemTypes.DIV],
  },
];

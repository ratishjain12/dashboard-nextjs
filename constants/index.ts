interface icon {
  title: string;
  value: string;
}
export const icons: icon[] = [
  {
    title: "bell",
    value: "/bell.svg",
  },
  {
    title: "checkbox",
    value: "/checkbox.svg",
  },
  {
    title: "video",
    value: "/video.svg",
  },
  {
    title: "folder",
    value: "/folder.svg",
  },
];

export const tasks = [
  {
    type: "Todo",
    status: "Important",
    title: "Create sign up sheet for holiday student/parent conferences.",
    progress: 30,
    color: "#FFAB2D",
  },
  {
    type: "Todo",
    status: "Instructor Meeting",
    title: "Plan holiday demonstration program. Create outline.",
    progress: 45,
    color: "#E328AF",
  },
  {
    type: "Todo",
    status: "Database",
    title: "Create sign up sheet for holiday student/parent conferences.",
    progress: 30,
    color: "#38E25D",
  },
  {
    type: "In Progress",
    status: "Video",
    title: "Create sparring tutorial video for the weekly class.",
    progress: 80,
    color: "#38E25D",
  },
  {
    type: "In Progress",
    status: "Bugs Fixing",
    title: "Create sparring tutorial video for the weekly class.",
    progress: 98,
    color: "#FF4A55",
  },
  {
    type: "Done",
    status: "Bugs Fixing",
    title: "Action Button needed for Google Maps visits.",
    progress: 100,
    color: "#FF4A55",
  },
  {
    type: "Done",
    status: "Database",
    title: "Update new instructor photos.",
    progress: 100,
    color: "#38E25D",
  },
  {
    type: "Done",
    status: "Instructor Meeting",
    title: "Review/correct yellow belt techniques.",
    progress: 100,
    color: "#E328AF",
  },
];

export const sideBarItems = [
  {
    title: "Dashboard",
    img: "/dashboard.svg",
  },
  {
    title: "Email",
    img: "/email.svg",
  },
  {
    title: "Chat",
    img: "/comment.svg",
  },
  {
    title: "Kanban",
    img: "/thumbnail.svg",
    arrow: true,
  },
  {
    title: "Contact",
    img: "/contact.svg",
  },
  {
    title: "Courses",
    img: "/invoice.svg",
  },
  {
    title: "Shop",
    img: "/online.svg",
  },
  {
    title: "Invoices",
    img: "/invoice.svg",
  },

  {
    title: "Settings",
    img: "/setting.svg",
  },
];

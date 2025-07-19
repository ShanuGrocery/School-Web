// src/data/menuData.js

const menuItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    submenu: [
      { title: "About School", link: "/about/school" },
      { title: "Mission & Vision", link: "/about/vision" },
      { title: "Principal Message", link: "/principal/message" },
      { title: "School-Gallary",  link: "/about-gallery",},
      { title: "Teacher-Details", link: "/about/details" },
      { title: "RTE", link: "/about/rte" },
    ],
  },
  {
    id: 3,
    title: "Admission",
    submenu: [
      { title: "Admission Notification's", link: "/admission/Admission" },
      { title: "Online Admission Form", link: "/admission/form" },
      { title: "Parents Enquiry Form", link: "/admission/parents" },
    ],
  },
  {
    id: 4,
    title: "Mandatory details",
    submenu: [
      { title: "Fee Structure", link: "/Fee/Mandatory Details" },
      { title: "Teaching Staff", link: "/staff/Mandatory Details" },
      { title: "Text-Books", link: "/textbooks/Mandatory Details" },
      { title: "Curriculum", link: "/academics/curriculum" },
      { title: "Infrastructure", link: "/infrastrucure/Mandatory Details" },
      { title: "School-Circular", link: "/schoolcircular/Mandatory Details" },
      { title: "Academic-Calendar", link: "/calender/Mandatory Details" },
      { title: "Student-Details", link: "/student/Mandatory Details" },
      { title: "Online-Fee-Payment", link: "/payment/Mandatory Details" },
      { title: "Upload-Fee-Receipt", link: "/recipt/Mandatory Details" },
      { title: "Parent teacher association", link: "/parent/Mandatory Details" },
      // { title: "Subjects", link: "/academics/subjects" },
      // { title: "Assessment", link: "/academics/assessment" },
    ],
  },
  {
    id: 5,
    title: "Transfer-certificate",
    submenu: [
      { title: "Get-Certificate", link: "/certificate/Transfer-certificate" },
    ],
  },
  {
    id: 6,
    title: "Contacts",
    submenu: [
      { title: "Feedback-form", link: "/feedbackform/Help" },
      { title: "Contact-us", link: "/contact/Help" },
    ],
  },
];

export default menuItems;


import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Mission from './component/MissionandVision/Mission.jsx';
import PrincipalMessage from './component/Principalmessage.jsx';
import RTE from './component/RTE/RTE.jsx';
import TeacherDetails from './component/Teacherdetails/TeacherDetails.jsx';
import Notification from './component/AdmissionNoti/Notification.jsx';
import Admissionform from './component/Admissionform/Admissionform.jsx';
import Enquiry from './component/ParentsEnq/Enquiry.jsx';
import Feestruct from './component/Feestructure/Feestruct.jsx';
import Textbooks from './component/Textbooks/Textbooks.jsx';
import Curriculum from './component/curriculum/Curriculum.jsx';
import Infrastrucure from './component/infrastrucure/Infrastrucure.jsx';
import SchoolCircular from './component/Schoolcircular/SchoolCircular.jsx';
import AcademicCalender from './component/AcademicCalender/AcademicCalender.jsx';
import Studentdetails from './component/Studentdetails/Studentdetails.jsx';
import Onlinefee from './component/OnlineFee/Onlinefee.jsx';
import Recept from './component/Recept/Recept.jsx';
import Parentsteacher from './component/Parentsteacher/Parentsteacher.jsx';
import Transfercertificate from './component/Transfer/Transfercertificate.jsx';
import Feebackform from './component/Feedbackform/Feebackform.jsx';
import Contactt from './component/Contactt/Contactt.jsx';
import SchoolGallery from './component/Schoolgal/SchoolGallery.jsx';
import AboutSchool from './component/AboutSchool/AboutSchool.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/about/school",
        element:<AboutSchool/>
      },
      {
        path:"/about-gallery",
        element:<SchoolGallery/>
      },
      {
        path:"/about/vision",
        element:<Mission/>
      },
      {
        path:"/principal/message",
        element:<PrincipalMessage/>
      },
      {
        path:"/about/rte",
        element:<RTE/>
      },
      {
        path:"/about/details",
        element:<TeacherDetails/>
      },
      {
        path:"/admission/Admission",
        element:<Notification/>
      },
      {
        path:"/admission/form",
        element:<Admissionform/>
      },
      {
        path:"/admission/parents",
        element:<Enquiry/>
      },
      {
        path:"/Fee/Mandatory Details",
        element:<Feestruct/>
      },
      {
        path:"/textbooks/Mandatory Details",
        element:<Textbooks/>
      },
      {
        path:"/academics/curriculum",
        element:<Curriculum/>
      },
      {
        path:"/infrastrucure/Mandatory Details",  
        element:<Infrastrucure/>
      },
      {
        path:"/schoolcircular/Mandatory Details",
        element:<SchoolCircular/>
      },
      {
        path:"/calender/Mandatory Details",
        element:<AcademicCalender/>
      },
      {
        path:"/student/Mandatory Details",
        element:<Studentdetails/>
      },
      {
        path:"/payment/Mandatory Details",
        element:<Onlinefee/>
      },
      {
        path:"/recipt/Mandatory Details",
        element:<Recept/>
      },
      {
        path:"/parent/Mandatory Details",
        element:<Parentsteacher/>
      },
      {
        path:"/certificate/Transfer-certificate",
        element:<Transfercertificate/>
      },
      {
        path:"/feedbackform/Help",
        element:<Feebackform/>
      },
      {
        path:"/contact/Help",
        element:<Contactt/>
      },
      // Add more routes here later if needed
    ],
  },
]);

export default router;

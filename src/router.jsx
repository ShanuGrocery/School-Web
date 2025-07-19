
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './component/AboutUs.jsx';
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
        element:<AboutUs/>
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
      // Add more routes here later if needed
    ],
  },
]);

export default router;

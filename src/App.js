import Hook6 from "./hooks/page11.js";
import Hook5 from "./hooks/page10.js";
import Hook4 from "./hooks/page9.js";
import Hook3 from "./hooks/page8.js";
import Hook2 from "./hooks/pag7.js";
import Hook1 from "./hooks/page6.js";
import ItemList from "./basic/page4.js";
import Myapi1 from "./api/api1.js";
import Myapi2 from "./api/api2.js";
import { HashRouter,Routes,Route,Link } from "react-router-dom";
//import functionname from "filename";
import Myuser from "./basic/page1.js";
import Mycity from "./basic/page2.js";
import Mybook from "./basic/page3.js";
import Myemp from "./api/employee.js";
import Mypro from "./api/product.js";
import Myapi3 from "./api/api3.js";
import Myclient from "./api/client.js";
import MyclientDetails from "./api/clientDetails.js";
import ContactUs from "./api/Contact.js";
function App() {
  return (

    <HashRouter>
        <header>
           <Link to = "/user" className="mylink"> Manage user </Link>
           <Link to = "/" className="mylink"> Manage city </Link>
           <Link to = "/book" className="mylink"> Manage books </Link>
           <Link to = "/item" className="mylink"> Manage Props </Link>
           <Link to = "/hook1" className="mylink"> Hook1 </Link>
           <Link to = "/hook2" className="mylink"> Hook2 </Link>
           <Link to = "/hook3" className="mylink"> Hook3 </Link>
           <Link to = "/hook4" className="mylink"> Hook4 </Link>
           <Link to = "/hook5" className="mylink"> Hook5 </Link>
           <Link to = "/hook6" className="mylink"> Hook6 </Link>
           <Link to = "/api" className="mylink"> Api </Link>
           <Link to = "/api2" className="mylink"> Api2 </Link>
           <Link to = "/employee" className="mylink"> Employee </Link>
           <Link to = "/product" className="mylink"> Product </Link>
           <Link to = "/api4/Arpita/Bangalore/B.tech" className="mylink"> useParams </Link>
           <Link to = "/api5" className="mylink"> Client </Link>
           <Link to = "/contact" className="mylink"> Contact </Link>
        </header>
        <Routes>
            <Route exact path="/user" element={<Myuser/>} />
            <Route exact path="/" element={<Mycity/>} />
            <Route exact path="/book" element={<Mybook/>} />
            <Route exact path="/item" element={<ItemList/>} />
            <Route exact path="/hook1" element={<Hook1/>} />
            <Route exact path="/hook2" element={<Hook2/>} />
            <Route exact path="/hook3" element={<Hook3/>} />
            <Route exact path="/hook4" element={<Hook4/>} />
            <Route exact path="/hook5" element={<Hook5/>} />
            <Route exact path="/hook6" element={<Hook6/>} />
            <Route exact path="/api" element={<Myapi1/>} />
            <Route exact path="/api2" element={<Myapi2/>} />
            <Route exact path="/employee" element={<Myemp/>} />
            <Route exact path="/product" element={<Mypro/>} />
            <Route exact path="/api4/:name/:city/:edu" element={<Myapi3/>} />
            <Route exact path="/api5" element={<Myclient/>} />
            <Route exact path="/client-details/:clientid" element={<MyclientDetails/>} />
            <Route exact path="/contact" element={<ContactUs/>} />
        </Routes>
    </HashRouter>
  );
}
export default App;

/*
Myuser; -function calling javascript
<Myuser/> - calling a component in jsx
 */
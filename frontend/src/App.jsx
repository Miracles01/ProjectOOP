import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home"; // หน้า START จะถูกเรียกใช้ที่ Home.jsx
import ConfigP from "./ConfigP"; // นำเข้า ConfigP.jsx
import Join from "./join"; // นำเข้า Join (ตรวจสอบชื่อให้ตรงกับโฟลเดอร์)
import Victree from "./Win"; // นำเข้า Victree (ตรวจสอบให้ตรงกับไฟล์จริง)

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">หน้าแรก</Link>
          </li>
          <li>
            <Link to="/config">ไปที่ Config</Link>
          </li>
          <li>
            <Link to="/join">ไปที่ Join</Link>
          </li>
          <li>
            <Link to="/victree">ไปที่ Victree</Link> {/* เพิ่ม Route ไปที่หน้า Victree */}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<ConfigP />} />
        <Route path="/join" element={<Join />} />
        <Route path="/victree" element={<Victree />} /> {/* เพิ่มเส้นทางไป Victree */}
      </Routes>
    </Router>
  );
}

export default App;

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          {/*}
          <Route path="/info" element={<Info />} />
          <Route path="/pensieri" element={<Pensieri />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/intrattenimento" element={<Intrattenimento />} />
          */}
      </Routes>
      </>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import BookTicket from "./pages/BookTicket.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/book-ticket" element={<BookTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
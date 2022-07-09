import { HashRouter as Router, Routes, Route } from "react-router-dom";

// react-query
import { QueryClientProvider, QueryClient } from "react-query";

import Header from "./components/Header/Header";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import NotFound from "./Pages/NotFound";
// import { SpaceProvider } from "./space/SpaceContext";
// import { ButtonProvider } from "./context/ButtonContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

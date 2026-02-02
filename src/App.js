import { useState } from "react";
import Header from "./Components/Header";
import Sider from "./Components/Sider";
import TicketViews from "./Components/TicketViews";
import TicketList from "./Components/TicketList";
import TicketDetails from "./Components/TicketDetails";
import TicketMeta from "./Components/TicketMeta";

function App() {
  const [showViews, setShowViews] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div
        className={`flex-1 grid ${
          showViews
            ? "grid-cols-[72px_260px_320px_1fr_340px]"
            : "grid-cols-[72px_320px_1fr_340px]"
        } transition-all duration-300`}
      >
        <Sider />

        {showViews && <TicketViews />}

        <TicketList toggleViews={() => setShowViews(!showViews)} />
        <TicketDetails />
        <TicketMeta />
      </div>
    </div>
  );
}

export default App;

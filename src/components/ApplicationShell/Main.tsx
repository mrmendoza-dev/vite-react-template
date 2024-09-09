import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "@pages/Home";

function Main() {
  const location = useLocation();

  return (
    <main className="Main w-full h-full flex flex-col overflow-auto">
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={200}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}

export default Main;

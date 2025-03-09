import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { ContactPage } from "../Pages/ContactPage";
import { AboutPage } from "../Pages/AboutPage";

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        {/* <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route> */}
      </Routes>
    </div>
  );
}

export { UserRoutes };

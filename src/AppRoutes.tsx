import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { CompleteOrder } from "./pages/CompleteOrder";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeorder" element={<CompleteOrder />} />
        <Route path="/orderconfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
};

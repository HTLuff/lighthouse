// EXTERNAL
import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// PAGES
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Lander from "./pages/Lander";
// ASSETS
import Loader from "./common/Loader";
import AuthProvider from "./hooks/AuthProvider";
import { DataProvider } from "./hooks/DataProvider";
// ROUTING
import routes from "./routes";
import PrivateRoute from "./routes/Private";
const DefaultLayout = lazy(() => import("./layout/DefaultLayout"));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  console.log("App Loading");
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <AuthProvider>
        <DataProvider>
          <Routes>
            <Route path="/signin/" element={<SignIn />} />
            <Route path="/signup/" element={<SignUp />} />
            <Route path="/" element={<Lander />} />
            <Route element={<DefaultLayout />}>
              {routes.map((routes, index) => {
                const { path, component: Component } = routes;
                return (
                  <Route key={index} element={<PrivateRoute />}>
                    <Route
                      path={path}
                      element={
                        <Suspense fallback={<Loader />}>
                          <Component />
                        </Suspense>
                      }
                    />
                  </Route>
                );
              })}
            </Route>
          </Routes>
        </DataProvider>
      </AuthProvider>
    </>
  );
}

export default App;

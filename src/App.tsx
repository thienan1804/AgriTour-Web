// External files
import { Routes, Route } from "react-router-dom";

// Internal files
import NotFound from "./presentations/components/notFound";
import HomePage from "./presentations/pages/home/HomePage";
import PreviewPage from "./presentations/pages/preview/PreviewPage";
import RedirectRoute from "./routes/RedirectRoute";
import PrivateRoute from "./routes/PrivateRoute";
import NewsPage from "./presentations/pages/news/NewsPage";
//Style

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {/* Public Route */}
        <Route element={<RedirectRoute path="/" />}>
          <Route path="/preview" element={<PreviewPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        {/* Private Route */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

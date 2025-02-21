import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Dashboard } from './pages/dashboard';
import { TitleGenerator } from './pages/title-generator';
import { DescriptionGenerator } from './pages/description-generator';
import { ScriptGenerator } from './pages/script-generator';
import { PromptGenerator } from './pages/prompt-generator';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/generate/title" element={<TitleGenerator />} />
          <Route path="/generate/description" element={<DescriptionGenerator />} />
          <Route path="/generate/script" element={<ScriptGenerator />} />
          <Route path="/generate/prompt" element={<PromptGenerator />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
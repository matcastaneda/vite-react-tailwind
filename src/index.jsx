import { createRoot } from 'react-dom/client';

// * Containers
import App from './containers/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

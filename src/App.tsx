import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá, Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Este é o nosso primeiro projeto React.</p>
    </>
  );
}

import { GlobalStyles } from './styles/global';
import { TextEditor } from './components/Editor/Editor';
import { Toolbar } from './components/Toolbar/Toolbar';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Toolbar />
      <TextEditor />
    </>
  );
}

import './App.css'
import { Collapse } from './components/Collapse'

const collapsedLabel = 'Button Collapsed';
const expandedLabel = 'Button Expanded';
const text = 'Some placeholder content for the collapse component.';

function App() { 
  return (
    <>
      <Collapse collapsedLabel={collapsedLabel} expandedLabel={expandedLabel} text={text} />
    </>
  )
}

export default App

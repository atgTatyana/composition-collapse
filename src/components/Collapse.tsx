import { useState } from 'react'

interface CollapseProps {
  collapsedLabel?: string,
  expandedLabel?: string,
  text: string,
}

export const Collapse = ({ collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть', text }: CollapseProps) => {
  const [ buttonName, setButtonName ] = useState(collapsedLabel);

  const handleClickCollapsed = () => {
    setButtonName(prev => prev === collapsedLabel ? expandedLabel : collapsedLabel);
  }

  return (
    <div>
      <p>
        <button className="btn" type="button" onClick={handleClickCollapsed}>
          {buttonName}
        </button>
      </p>
      {buttonName === expandedLabel && (
        <div className="collapse">
          {text}
        </div>
      )} 
    </div>
  )
}

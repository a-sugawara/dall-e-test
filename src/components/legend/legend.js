import TextSelect from './textSelect'
import "./legend.css"

export default function Legend(props) {
  return (
    <div className="legend">
      <TextSelect
        type="answer"
      />
      |
      <TextSelect
        type="poem"
        />
      |
      <TextSelect
        type="summary"
        />
      |
      <TextSelect
        type="image"
      />
    </div>
  )
}

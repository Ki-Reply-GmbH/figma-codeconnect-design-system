import { Tag } from './components/Tag/Tag'
import TextStyles from './components/TextStyles'

function App() {
  return (
    <div className="flex items-center gap-4 p-8">
      <Tag size="S">Tag S</Tag>
      <Tag size="XS">Tag XS</Tag>
    </div>
  )
}

export default App

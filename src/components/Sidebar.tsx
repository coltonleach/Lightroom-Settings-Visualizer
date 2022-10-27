import './styles/sidebar.scss'

const Sidebar: React.FC = () => {
  return (
    <ul className='sidebar'>
      <li className='bar'>Temp</li>
      <input type='range' id='tempRange' min='1000' max='8000' value='4500' />
      <li className='bar'>Tint</li>
      <input type='range' id='tintRange' min='-30' max='30' value='-15' />
      <li className='bar'>Exposure</li>
      <li className='bar'>Contrast</li>
      <li className='bar'>Highlights</li>
    </ul>
  )
}

export default Sidebar

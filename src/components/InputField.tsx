import './styles/inputfield.scss'
import { useRef, useState } from 'react'

const InputField: React.FC = () => {
  const fileRef = useRef<HTMLInputElement | null>(null)
  const [settings, setSettings] = useState({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fileRef?.current?.files) return
    const reader = new FileReader()

    reader.onload = async (e) => {
      const res = e.target?.result as string
      const resSubstring = res.substring(
        res.indexOf('<x:xmpmeta'),
        res.lastIndexOf('</x:xmpmeta>') + 12
      )

      setSettings(parseXml(resSubstring))
    }

    reader.readAsText(fileRef.current.files[0])
  }

  const parseXml = (text) => {
    const jsonMetadata = {}
    const parser = new DOMParser()

    const xmlString = parser.parseFromString(text, 'text/xml')

    xmlString.documentElement.innerHTML.split(' ').map((prop) => {
      const key = prop.substring(prop.indexOf('crs:') + 4, prop.indexOf('='))
      const value = prop.substring(prop.indexOf('"') + 1, prop.lastIndexOf('"'))
      jsonMetadata[key] = value
    })

    return jsonMetadata
  }

  return (
    <div className='inputfield'>
      <p>Upload file here to get started</p>
      <form onSubmit={handleSubmit}>
        <input type='file' name='photoUpload' id='photoUpload' ref={fileRef} />
        <input type='submit' value='Upload' />
      </form>
      <button onClick={() => console.log(settings)}>DISPLAY SETTINGS</button>
    </div>
  )
}

export default InputField

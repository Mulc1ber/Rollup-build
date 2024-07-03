import './index.css'
import IMAGE from './assets/js_logo.png'

const javaScript = () => {

  const container = document.createElement('div')
  container.className = 'container'
  document.body.append(container)

  const h1 = document.createElement('h1')
  h1.textContent = 'I love JavaScript'
  container.append(h1)

  const img = document.createElement('img')
  img.src = IMAGE
  container.append(img)

}
javaScript()

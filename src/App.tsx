import './App.css'
import { About, Contact, Footer, Header, Portfolio, Resume, Testimonials } from './components'
import { default as resumeData } from "./resumeData.json"

function App() {
  return (
    <div>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  )
}

export default App

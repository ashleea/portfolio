import Router from '@/routes.tsx';
import Header from '@/views/components/header.tsx';
import Footer from '@/views/components/footer.tsx';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App

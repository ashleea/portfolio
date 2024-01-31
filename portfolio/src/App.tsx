import Router from '@/routes.tsx';
import Header from '@/views/components/header.tsx';
import Footer from '@/views/components/footer.tsx';
import './App.css'

function App() {

  return (
    <>
      <Header />
        <div id="page">
          <Router />
        </div>
      <Footer />
    </>
  )
}

export default App

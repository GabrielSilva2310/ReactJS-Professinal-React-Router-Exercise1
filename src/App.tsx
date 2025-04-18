
import './App.css'
import ButtonPrimary from './components/ButtonPrimary'
import CardText from './components/CardText'
import HeaderDefault from './components/HeaderDefault'

export default function App() {
  return (
    <>
    <HeaderDefault/>
    <body>
    <main>
      <section className='ex-container'>
        <CardText text='Página Inicial'/>
        <ButtonPrimary text='Ver Promoção'/>
      </section>
    </main>
      
    </body>
    </>
  )
}



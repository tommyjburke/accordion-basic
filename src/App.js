import logo from './logo.svg'
import './App.css'

const faqs = [
   {
      title: 'Where are these chairs assembled?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
   },
   {
      title: 'How long do I have to return my chair?',
      text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
   },
   {
      title: 'Do you ship to countries outside the EU?',
      text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
   },
]

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <img
               src={logo}
               className='App-logo'
               alt='logo'
            />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React
            </a>
         </header>
      </div>
   )
}

export default App

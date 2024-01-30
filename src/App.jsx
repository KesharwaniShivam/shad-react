import { Button, } from './components/ui/button'

import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center h-screen w-full flex-col '>
    <h1 className='text-white'>hello</h1> 
    <Button variant='destructive' className ='mt-2 px-8 py-5 text-md'>Shivam</Button>
    <Button variant='outline' className ='mt-2 px-8 py-5 text-md'>Shivam</Button>
    
    
    </div>
    </>
  )
}

export default App

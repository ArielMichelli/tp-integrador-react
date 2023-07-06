import { useContext } from 'react'
import { MainContextState } from '@/components/context/MainContextProvider'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
  const { state } = useContext(MainContextState)

  const newLocal = 'm-0 p-2 text-center text-white bg-dark border rounded border-warning text-capitalize'
  return (
    <>
      <div className='bg-dark'>
      <div  id="tituloInicio"> 
        <h1 className={newLocal}>Bienvenido {state.username}</h1>
      </div>
      </div>

      <div className='negro container-fluid' id="contenido">

      <div class="row row-cols-1 row-cols-md-3 g-4  negro text-white text-capitalize text-center">

      {/* <CardGroup className='negro text-white text-capitalize text-center'> */}
      <div class="col">
      <Card  bg="dark" className='border rounded card h-100'>
        <Card.Img  className='border rounded' variant="top" src='./perfil1.png' />
        
        <Card.Body className="card-body">
          
          <Card.Title>{state.username}</Card.Title>
         
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer> */}
      </Card>
      </div>

      <div class="col">
      <Card bg="dark" className='border rounded card h-100' >
        <Card.Img   className='border rounded' variant="top" src='./perfil2.png' />
        
        <Card.Body>
          
          <Card.Title>Usuario</Card.Title>
         
        </Card.Body>
        {/* <Card.Footer>
          
        </Card.Footer> */}
      </Card>
      </div>

      <div class="col">
      <Card bg="dark" className='border rounded card h-100'>
        <Card.Img  className='border rounded' variant="top" src='./perfil3.png'/>
        
        <Card.Body>
          
          <Card.Title>Kids</Card.Title>
        
        </Card.Body>
        {/* <Card.Footer>
        
        </Card.Footer> */}
      </Card>
      </div>
    {/* </CardGroup> */}


    </div> 
    </div> 
    </>
  )
}

export default Home

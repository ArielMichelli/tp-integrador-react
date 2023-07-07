import { useState } from 'react'
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form';

export default function SearchBar () {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchValue('')
    router.push({
      pathname: '/buscar',
      query: { searchValue }
    })
  }

  return (
    <>
      <form className='d-flex' onSubmit={handleSubmit}>
        <Form.Control
          type='search'
          placeholder='Buscar...'
          className='me-2'
          aria-label='Buscar...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {/* <Button variant="outline-secondary">Search</Button> */}
      </form>
    </>
  )
}

import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector} from 'react-redux/es/hooks/useSelector'

function Movies() {

   const movies = useSelector(selectMovies);

  return (
    <Container>
        <h4>Recomended For You</h4>

       <Content>

           {movies && movies.map((movie)=>(

            <Wrap key={movie.id}>
                   <img alt='' src={movie.cardImg}/>
           </Wrap>

           ))

           }

      
         <Wrap>
            <img alt='' src="https://gumlet.assettype.com/afkgaming%2F2023-06%2F146cc77c-7b12-489f-8dff-5019dc80ed0e%2FPayal_Gaming_Cover_1.png?compress=true&dpr=1&w=1200"/>
         </Wrap>
         <Wrap>
            <img alt='' src="https://gumlet.assettype.com/afkgaming%2F2023-06%2F146cc77c-7b12-489f-8dff-5019dc80ed0e%2FPayal_Gaming_Cover_1.png?compress=true&dpr=1&w=1200"/>
         </Wrap>
         <Wrap>
            <img alt='' src="https://gumlet.assettype.com/afkgaming%2F2023-06%2F146cc77c-7b12-489f-8dff-5019dc80ed0e%2FPayal_Gaming_Cover_1.png?compress=true&dpr=1&w=1200"/>
         </Wrap>
         <Wrap>
            <img alt='' src="https://gumlet.assettype.com/afkgaming%2F2023-06%2F146cc77c-7b12-489f-8dff-5019dc80ed0e%2FPayal_Gaming_Cover_1.png?compress=true&dpr=1&w=1200"/>
         </Wrap>
         
       </Content>

    </Container>
  )
}

export default Movies

const Container = styled.div`


`

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4,minmax(0,1fr));
padding: 20px;
`

const Wrap = styled.div`
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.s;
cursor: pointer;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
&:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249,249,249,0.8);
}

`
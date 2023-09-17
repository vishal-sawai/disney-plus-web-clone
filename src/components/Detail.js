// import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
// import { useParams } from 'react-router-dom/cjs/react-router-dom'
// import db from '../firebase';

function Detail() {

  // const {id} = useParams();
  // const [movie,setMovie] = useState()

  // useEffect(()=>{
  //     db.collection("movies")
  //     .doc(id)
  //     .get()
  //     .then((doc)=>{
  //       if (doc.exists) {
  //         setMovie(doc.data());
  //       }
  //       else{

  //       }
  //     })
  // },[])

  return (
    <Container>

    <Background>
        <img src="https://trumpwallpapers.com/wp-content/uploads/Spiderman-Wallpaper-32-3840-x-2160.jpg" alt='' />
    </Background>

    <ImageTitle>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" alt=''/>
    </ImageTitle>

    <Control>
        <PlayButton>
           <img src="/images/play-icon-black.png" alt="" srcset="" />
           <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png" alt="" srcset="" />
           <span>Trailer</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupWatchButton>
             <img src="/images/group-icon.png" alt="" srcset="" />
        </GroupWatchButton>
    </Control>  

    <SubTitle>
      2018 . 7m . Family, Fantasy, Kids, Animation
    </SubTitle>

    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus ducimus amet laudantium accusantium corporis nisi. Hic dolore minus exercitationem voluptate quia corporis eum inventore quibusdam placeat. Fugit, in laudantium?
    </Description>
     
    </Container>
//     <Container>

// <Background>
//     <img src={movie.backgroundImg} alt='' />
// </Background>

// <ImageTitle>
//   <img src={movie.titleImg} alt=''/>
// </ImageTitle>

// <Control>
//     <PlayButton>
//        <img src="/images/play-icon-black.png" alt="" srcset="" />
//        <span>PLAY</span>
//     </PlayButton>
//     <TrailerButton>
//     <img src="/images/play-icon-white.png" alt="" srcset="" />
//        <span>Trailer</span>
//     </TrailerButton>
//     <AddButton>
//         <span>+</span>
//     </AddButton>
//     <GroupWatchButton>
//          <img src="/images/group-icon.png" alt="" srcset="" />
//     </GroupWatchButton>
// </Control>  

// <SubTitle>
//   {movie.subTitle}
// </SubTitle>

// <Description>
// {movie.description}
// </Description>
 
// </Container>
  )
}

export default Detail

const Container = styled.div`
     min-height: calc(100vh-70px);
     padding: 0 calc(3.5vw + 5px);
     position: relative;
`

const Background = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     z-index: -1;
     opacity: 0.8;
     img{
      height: 100%;
      width: 100%;
      object-fit: cover;
     }
`
const ImageTitle = styled.div`
      height: 30vh;
      width: 35vw;
      min-height: 170px;
      min-width: 200px;
      margin-top: 60px;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
`
const Control = styled.button`
     display: flex;
     border: none;
     background: none;
     margin-top: 20px;
     align-items: center;
`

const PlayButton = styled.button`
      border-radius:4px;
      font-size: 15px;
      padding: 0px 24px;
      margin-right: 22px;
      display: flex;
      align-items: center;
      height: 56px;
      background: rgb(249,249,249);
      border: none;
      letter-spacing: 1.8px;
      cursor: pointer;

      &:hover{
        background: rgb(198,198,198);
      }
`

const TrailerButton = styled(PlayButton)`
      background: rgba(0,0,0,0.3);
      border: 1px solid rgb(249,249,249);
      color: rgb(249,249,249);
      text-transform: uppercase;
`

const AddButton = styled.button`
       margin-right: 16px;
       width: 44px;
       height: 44px;
       display: flex;
       align-items: center;
       justify-content: center;
       border-radius: 50%;
       border: 2px solid white;
       background-color: rgba(0,0,0,0.6);
       cursor: pointer;
       color: white;
       span{
        font-size: 18px;
        font-size: 30px;
       }
`

const GroupWatchButton = styled(AddButton)`
      background: rgb(0,0,0);
`

const SubTitle = styled.div`
     color: rgb(249,249,249);
     font-size: 15px;
     min-height: 20px;
     margin-top: 26px;  
`

const Description = styled.div `
      line-height: 1.4;
      font-size: 20px;
      margin-top: 16px;
      color: rgb(249,249,249);
      max-width: 700px;
`
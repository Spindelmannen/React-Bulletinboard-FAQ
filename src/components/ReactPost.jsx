
import PostLiked from "./PostLiked";
import { useState } from 'react';

const ReactPost = ({ question, answer }) => {
  const [like, setLike ] = useState(false); //tillståndet är falsk tills vi säger något annat
  return (
    <div className="post"> {/*body för varje post*/}
      <h2>Question</h2>
      <p>{question}</p>
      <h2>Answer</h2>
      <p>{answer}</p>
      {like ? <PostLiked/> :  <button className="button" onClick={()=> setLike(true)}>Like this post</button>}
      {/* om like är true så kör vi postliked komponenten. annars så skapar vi en like-knapp som har en funktion som leder till true dvs postliked komponenten*/}
    </div>
  )
}

export default ReactPost
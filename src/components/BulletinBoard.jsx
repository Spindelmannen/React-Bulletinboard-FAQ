import ReactPost from "./ReactPost";

export const Header = () => {
  return (
    <>
    <h1>Bulletinboard</h1>
    <h2>React FAQ</h2>
    </>
  )
}
export const BulletinBoard = ({ posts }) => { //variabel som innehåller postsdatan
  return (
    <>
        {posts.map((post) => { //för varje post returna en fråga och ett svar.
          return (<ReactPost question={post.question} answer={post.answer}/>)
        })
        }
    </>
  )
}



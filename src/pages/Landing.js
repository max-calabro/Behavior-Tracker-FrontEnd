import SignIn from '../components/SignIn'
import '../CSS/SignIn.css'

const Landing = ({ setUser }) => {
  return (
    <>
      <main className="landing-page">
        <SignIn setUser={setUser} />
      </main>
    </>
  )
}

export default Landing

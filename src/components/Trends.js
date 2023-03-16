const Trends = ({ setComponentName }) => {
  const changeStateBack = (home) => {
    setComponentName(home)
  }

  return (
    <>
      <div>Trends</div>
      <button onClick={() => changeStateBack('home')}>Back</button>
    </>
  )
}

export default Trends

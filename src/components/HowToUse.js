const HowToUse = ({ setComponentName }) => {
  const changeStateBack = (home) => {
    setComponentName(home)
  }

  return (
    <>
      <div>This is post mvp</div>
      <button onClick={() => changeStateBack('home')}>Back</button>
    </>
  )
}

export default HowToUse

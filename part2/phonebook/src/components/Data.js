const Data = ({ entries }) => {
  return (
    <>
      <h2>Numbers</h2>
      {entries.map((obj, i) => (
        <div key={obj.name}>
          {obj.name} {obj.number}
        </div>
      ))}
    </>
  )
}

export default Data

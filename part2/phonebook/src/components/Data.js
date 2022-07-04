const Data = ({ entries, deleteHandler }) => {
  return (
    <>
      <h2>Numbers</h2>
      {entries.map((obj, i) => (
        <div key={obj.name}>
          {obj.name} {obj.number}
          <button onClick={() => deleteHandler(obj)}>delete</button>
        </div>
      ))}
    </>
  )
}

export default Data

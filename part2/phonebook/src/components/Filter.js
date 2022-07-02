const Filter = ({ filter, onChange }) => (
  <div>
    Show entries containing:
    <input value={filter} onChange={onChange} />
  </div>
)

export default Filter

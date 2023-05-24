const Filter = (props) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        filter shown with
        <input value={props.filter} onChange={props.handleFilterChange} />
      </div>
    </form>
  )
}

export default Filter
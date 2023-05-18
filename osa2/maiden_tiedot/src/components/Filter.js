const Filter = (props) => {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          find countries
          <input value={props.filter} onChange={props.handleFilterChange} />
        </div>
      </form>
    )
  }
  
  export default Filter
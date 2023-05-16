const Info = ({infoMessage, error}) => {
    if (infoMessage === null) {
        return
    }
    const infoStyle = {
        color: (error ? 'red' : 'green'),
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10 
    }
  
  return (
    <div style = {infoStyle}>{infoMessage}</div>
  )
}

export default Info
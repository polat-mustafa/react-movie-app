const Body = ({data}) => {

  console.log(data);
  return (
    <div>
      {
        data.map(movie => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <img src={movie.image} alt={movie.title} />
          </div>
        ))

      }
    </div>
  )
}

export default Body
import './cinema.styles.scss';

const Cinema = () => {
  return (
    <div className="cinema">
      <div className='cinemaHero'>

      <h1 className='theaterTitle'> Have you come to watch a movie? </h1>
      </div>
      <div >
      <iframe className='movieBox' src="https://www.youtube.com/embed/VA04DTP5rKA" title="YouTube video player" frameborder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );

}
export default Cinema;

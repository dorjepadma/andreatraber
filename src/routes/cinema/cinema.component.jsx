import './cinema.styles.scss';

const Cinema = () => {
  return (
    <div className="cinema">
      <div className='cinemaHero'>

      <h1 className='theaterTitle'> Inspiration and Influences of Andrea in Theater </h1>
      </div>
      <div className='cinemaContainer'>

      <div className='embed-youtube'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TbP6DadZgT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className='embed-youtube'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3SL4OkdJjOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className='embed-youtube'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YEdyuw7NKZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className='embed-youtube'>
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/XQ0pbQf1Nqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className='embed-youtube'>
      <iframe  width="560" height="315" src="https://www.youtube.com/embed/VA04DTP5rKA" title="YouTube video player" frameborder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
    </div>
  );

}
export default Cinema;

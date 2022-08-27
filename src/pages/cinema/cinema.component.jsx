import './cinema.styles.scss';

const Cinema = () => {
  return (
    <div className="cinema">
      <h1> Have you come to watch a movie? </h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VA04DTP5rKA" title="YouTube video player" frameborder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );

}
export default Cinema;

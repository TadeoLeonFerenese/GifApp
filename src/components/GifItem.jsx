export const Gifitem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt="Title" />
      <p>{title}</p>
    </div>
  );
};

import "./PageTitle.scss";

const PageTitle = (props) => {
  return (
    <div className="d-flex my-2 justify-content-center">
      <h4 className='titles'>{props.title}</h4>
    </div>
  );
};

export default PageTitle;

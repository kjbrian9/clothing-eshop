import "../Styles/HeroPage.css";
import CollectionTabButton from "./CollectionTabButton";
interface Props {
  image: string;
  pageLink: string;
  collectionTitle: string;
}
//src={`${process.env.PUBLIC_URL}/${image}`}

function CollectionContainer({ collectionTitle, image, pageLink }: Props) {
  return (
    <div className="collection-container">
      <img
        className="collection-image"
        src={`${process.env.PUBLIC_URL}/images/${image}`}
      ></img>
      <CollectionTabButton
        title={collectionTitle}
        pageLink={pageLink}
      ></CollectionTabButton>
    </div>
  );
}

export default CollectionContainer;

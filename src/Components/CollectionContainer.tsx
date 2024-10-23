import "../Styles/HeroPage.css";
import CollectionTabButton from "./CollectionTabButton";
interface Props {
  image: string;
  pageLink: string;
  collectionTitle: string;
}

function CollectionContainer({ collectionTitle, image, pageLink }: Props) {
  return (
    <div className="collection-container">
      <img className="collection-image" src={image}></img>
      <CollectionTabButton
        title={collectionTitle}
        pageLink={pageLink}
      ></CollectionTabButton>
    </div>
  );
}

export default CollectionContainer;

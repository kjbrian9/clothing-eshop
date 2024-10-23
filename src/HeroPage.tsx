import CollectionContainer from "./Components/CollectionContainer";
import Header from "./Components/Header";

function HeroPage() {
  return (
    <>
      <div className="hero-page-container">
        <div className="collection-tabs-container">
          <CollectionContainer
            collectionTitle="Men"
            pageLink="/SummerCollectionFrontPage"
            image="CollectionTabPicture1.jpeg"
          ></CollectionContainer>
          <CollectionContainer
            collectionTitle="Women"
            pageLink="/WomenPage"
            image="CollectionTabPicture3.webp"
          ></CollectionContainer>
          <CollectionContainer
            collectionTitle="Jewellery"
            pageLink="/SummerCollectionFrontPage"
            image="CollectionTabPicture3.jpeg"
          ></CollectionContainer>
        </div>
      </div>
    </>
  );
}

export default HeroPage;

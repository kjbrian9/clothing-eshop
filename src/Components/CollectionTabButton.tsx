import { Link } from "react-router-dom";
import "../Styles/HeroPage.css";

interface Props {
  pageLink: string;
  title: string;
}

function CollectionTabButton({ pageLink, title }: Props) {
  return (
    <Link to={pageLink} className="collection-button">
      {title}
    </Link>
  );
}

export default CollectionTabButton;

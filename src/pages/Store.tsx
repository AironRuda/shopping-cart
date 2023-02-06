import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
const Store = () => {
  return (
    <>
      <Row lg={3} md={2} sm={1} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;

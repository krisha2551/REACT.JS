import { Card, Table, Button } from "react-bootstrap";
import { FaPenFancy, FaTrashAlt, FaBoxOpen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setUpdateState } from "../features/product/productSlice";

export default function ProductList() {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();


  return (
    <Card className="p-4 shadow">
      <h4 className="text-center mb-3">Product List</h4>
      <Table bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Name</th><th>Price</th><th>Qty</th><th>Category</th><th>Amount</th><th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center text-muted">
                <FaBoxOpen className="me-2 text-danger"/> No Data Found
              </td>
            </tr>
          ) : (
            <>
              {products.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td><td>{p.name}</td><td>₹{p.price}</td><td>{p.qty}</td><td>{p.category}</td><td>₹{p.qty * p.price}</td>
                  <td>
                    <Button size="md" variant="outline-warning" className="d-flex gap-2" onClick={()=>dispatch(setUpdateState(p))}>
                      <FaPenFancy/> 
                    </Button>
                  </td>
                  <td>
                    <Button size="md" variant="outline-danger" className="d-flex gap-2" onClick={()=>dispatch(deleteProduct(p.id))}>
                      <FaTrashAlt/> 
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
    </Card>
  );
}

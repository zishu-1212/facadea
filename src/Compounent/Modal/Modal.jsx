import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className=" vintage-button2 mt-4 mt-md-0 "
        style={{ border: "none",color:"#32200D" }}
        onClick={handleShow}
      >
        MINT NFT
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        // backdrop={false} // <-- removes black background
        centered
      >
        <Modal.Body
          style={{ backgroundColor: "transparent" }}
          className="model"
        >
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="font">NFT Type</Form.Label>
              <Form.Select className="custom-select">
                <option value="">Select NFT Type</option>
                <option value="Trapgevel">Trapgevel</option>
                <option value="Neck Gable">Neck Gable</option>
                <option value="Bell Gable">Bell Gable</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="font">Quantity</Form.Label>
              <Form.Control
                className="custom-input"
                type="number"
                min="1"
                placeholder="..."
              />
            </Form.Group>

            <div className="text-center">
              <Button
                className="font"
                style={{
                  fontSize: "16px",
                  padding: "6px 36px",
                  backgroundColor: "#4b2e0d",
                  border: "none",
                }}
              >
                MINT
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;

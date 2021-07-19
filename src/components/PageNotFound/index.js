import Button from "../shared/Button";
import Col from "../shared/Col";
import Row from "../shared/Row";


export default function PageNotFound() {
  return (
    <>
      <div className="spacing"></div>
      <Row className="tcl-jc-center">
        <Col xs={8}>
          <Row>
            <Col xs={5}>
              <img src="https://cdn.24h.com.vn/images/404img_092018.png" alt="Hinh anh chôm từ 24h" />
            </Col>
            <Col xs={7}>
              <h1>Truy cập của bạn có thể bị lỗi hoặc không tìm thấy nội dung</h1>
              <Button>Quay lại trang chủ</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
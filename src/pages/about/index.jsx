import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import { dataabout, meta, worktimeline, skills } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header text-center fs-3">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 ">
          <Col lg="8">
            <h1 className="display-4 mb-4">من أنا</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec fs-2 py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec fs-2 py-4">التاريخ المهني</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th className="color_sec" scope="row">
                        {data.jobtitle}
                      </th>
                      <td className="color_sec">{data.where}</td>
                      <td className="color_sec">{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec fs-2 py-4">المهارات الشخصية</h3>
          </Col>
          <Col lg="7" className="grid-container">
            {skills.map((skills, i) => {
              return (
                <div key={i}>
                  <Card className="skill-card">
                    <Card.Body>
                      <h3 className="card-title">{skills.name}</h3>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

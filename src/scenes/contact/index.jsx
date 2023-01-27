import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Outer from "components/Outer";
import Title from "components/Title";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Image, Row } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardTitle from "components/CardTitle";
import BodyText from "components/BodyText";
import contact from "../../Asset/images/about/contact.svg";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2jhtv9n",
        "template_escbdce",
        form.current,
        "BvoQ_6BBNLRNCTRIp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ backgroundColor: "#EEEEEE" }} id="contact">
      <Container>
        <Outer>
          <Title style={{ color: "rgb(121, 135, 119)" }}>Contact</Title>
          <Row
            xs={1}
            md={2}
            className="g-3"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Image src={contact} style={{ maxWidth: "100%" }}></Image>
            </div>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-4">
                <CardTitle style={{ fontSize: "40px" }}>Let's Talk</CardTitle>
              </Form.Group>
              <Form.Group className="mb-3">
                <BodyText>Email</BodyText>
                <Form.Control
                  type="email"
                  name="user_email"
                  className="form-control"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <BodyText>Message</BodyText>
                <Form.Control
                  as="textarea"
                  name="message"
                  className="form-control"
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100 mt-3"
                style={{
                  backgroundColor: "#798777",
                  borderColor: "#798777",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "20px",
                }}
              >
                Send Message
              </Button>
            </Form>
          </Row>
          <div className="mt-5">
            <a
              href="https://ph.linkedin.com/in/charmaine-manga-66ab29226"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  fontSize: "3rem",
                  color: "#798777",
                }}
              />
            </a>
            <a
              href="https://github.com/mango20"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  fontSize: "3rem",
                  marginLeft: "10px",
                  color: "#798777",
                }}
              />
            </a>
          </div>
        </Outer>
      </Container>
    </div>
  );
};

export default ContactUs;

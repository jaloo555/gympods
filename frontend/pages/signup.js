import React from 'react'
import {strapiRegister} from '../lib/auth'
import Link from "next/link"
import Layout from '../components/Layout/Layout'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap"

class Signup extends React.Component {
  state = {
    data: {
      email: "",
      username: "",
      password: ""
    },
    loading: false,
    error: ""
  }
  
  constructor(props) {
    super(props)
  }

  onChange(propertyName, event) {
    const { data } = this.state;
    data[propertyName] = event.target.value;
    this.setState({ data });
  }
  
  onSubmit() {
    const {
      data: { email, username, password }
    } = this.state;
    this.setState({ loading: true });

    strapiRegister(username, email, password)
      .then(() => this.setState({ loading: false }))
      .catch(error => this.setState({ error: error }));
  }
  render() {
    const {error} = this.state
    return (
        <Layout>
          <Container fluid>
            <Row>
              <Col sm="12" md={{size: 5, offset: 3}}>
                <div className="paper">
                  <div className="header">
                    <h1>Sign up</h1>
                  </div>
                  <section className="wrapper">
                  <div className="notification"><h1>{error}</h1></div>
                    <Form>
                      <FormGroup>
                        <Label>Username:</Label>
                        <Input
                        className="username"
                        value={this.state.data.username}
                        onChange={this.onChange.bind(this, "username")}
                        type="text"
                        name="username"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label>Email:</Label>
                        <Input
                        className="input"
                        value={this.state.data.email}
                        onChange={this.onChange.bind(this, "email")}
                        type="email"
                        name="email"
                        />
                      </FormGroup>

                      <FormGroup style={{ marginBottom: 30 }}>
                        <Label>Password:</Label>
                        <Input
                          className="input"
                          onChange={this.onChange.bind(this, "password")}
                          type="password"
                          name="password"
                        />
                      </FormGroup>

                      <FormGroup>
                        <div className="bottomLink">
                          <span>
                            <a href="">
                              <small>Forgot Password?</small>
                            </a>
                          </span>
                          <Button
                            style={{width: 120 }}
                            color="primary"
                            onClick={this.onSubmit.bind(this)}
                          >
                            Submit
                          </Button>
                          <span>
                            <a href="">
                              <Link href="/signin"><small>Sign In</small></Link>
                            </a>
                          </span>
                        </div>
                      </FormGroup>
                    </Form>
                  </section>
                </div>
              </Col>
            </Row>
            <style jsx>{`
              .paper {
                border: 1px solid lightgray;
                box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
                  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                  0px 2px 1px -1px rgba(0, 0, 0, 0.12);
                height: 540px;
                border-radius: 6px;
                margin-top: 90px;
              }
              .notification {
                color: #ab003c;
              }
              .header {
                width: 100%;
                height: 120px;
                background-color: white;
                margin-bottom: 30px;
                border-radius-top: 6px;
              }
              .header > h1 {
                font-family: 'Bai Jamjuree', sans-serif;
                text-transform: uppercase;
                text-decoration: none;
                text-align: center;
              }
              .wrapper {
                padding: 10px 30px 20px 20px !important;
              }
              .bottomLink {
                display: flex;
                justify-content: space-between;
              }
              a {
                color: blue !important;
              }
              .input {
                height: 50px;
                fontSize: 1.2em;
              }
            `}
          </style>
        </Container>
      </Layout>
    )
  }
}

export default Signup


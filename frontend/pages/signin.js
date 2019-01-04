import React from 'react'
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
import Router from 'next/router'
import Cookies from 'js-cookie'
import defaultPage from '../hocs/defaultPage'
import {strapiLogin} from '../lib/auth'
import Link from 'next/link'

class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      error: ""
    }
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      Router.push("/")
    }
  }

  onChange(propertyName, event) {
    const { data } = this.state
    data[propertyName] = event.target.value
    this.setState({ data })
  }

  onSubmit() {
    const {
      data: { email, username, password }
    } = this.state
    const { context } = this.props
    this.setState({ loading: true })
    strapiLogin(email, password)
      .then(() => console.log(Cookies.get("user")))
      .catch((error) => {
        this.setState({ error: error })
      })
    console.log(this.state.error)
  }

  render() {
    const {error} = this.state
    return (
      <Layout>
        <Container fluid className="main">
          <Row>
            <Col sm="12" md={{size: 5, offset: 3}}>
              <div className="paper">
                <div className="header">
                  <h1>Sign In</h1>
                </div>
                <section className="wrapper">
                  <div className="notification">{error}</div>
                  <Form>
                    <FormGroup>
                      <Label>Email:</Label>
                      <Input
                        onChange={this.onChange.bind(this, "email")}
                        type="email"
                        name="email"
                        style={{ height: 50, fontSize: "1.2em" }}
                      />
                    </FormGroup>
                    <FormGroup style={{ marginBottom: 30 }}>
                      <Label>Password:</Label>
                      <Input
                        onChange={this.onChange.bind(this, "password")}
                        type="password"
                        name="password"
                        style={{ height: 50, fontSize: "1.2em" }}
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
                            <Link href="/signup"><small>Sign up</small></Link>
                          </a>
                        </span>
                      </div>
                    </FormGroup>
                  </Form>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .main {
            padding-top: 65px;
          }
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            height: 440px;
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
            text-decoration: none;
            text-align: center;
          }
          .header > h1{
            font-family: 'Bai Jamjuree', sans-serif;
          }
          .bottomLink {
            display: flex;
            justify-content: space-between;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Signin
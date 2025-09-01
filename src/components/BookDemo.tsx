import {useState, type ChangeEvent, type FormEvent} from 'react'
import {API_HOST} from '@/config';
import {Col, Row, Form, Container} from 'react-bootstrap';
import { AnalyticsService } from '@/services/AnalyticsService'
import Spacer from './Spacer';
import Fade from './Fade';
import { useTranslation } from 'next-i18next';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  acreage: string;
  channel: string;
  contactMessage: string;
}

interface Message {
  text: string;
  className: string;
}

async function submitContactForm(email: string, message: string) {
    const url = API_HOST + "/api/v1/support/contact"
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'reportedBy': email,
          'message': message
        })
    })
    .then(response => response.json()) 
    .then((data) => {
        return data
    })
    .catch((err) => console.log(err))
   };

function isValidEmail(email: string) {
  return email && email.includes('.') && email.includes('@')
}

export default function BookDemo() {
    const { t } = useTranslation('common');
    const [message, setMessage] = useState<Message | null>(null);
    const [didSubmit, setDidSubmit] = useState(false);

    const [formData, setFormData] = useState<ContactFormData>({
      firstName: '',
      lastName: '',
      email: '',
      companyName:'',
      acreage:'',
      channel:'',
      contactMessage:''
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // Update the formData state as the user types
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {firstName, lastName, contactMessage,companyName, email,acreage}  = formData;

        if (!isValidEmail(email)) {
          setMessage({
            text: t("inputValidEmail"),
            className: "error"
          })
        } else if (!contactMessage || contactMessage.length === 0) {
          setMessage({
            text: t("inputValidMessage"),
            className: "error"
          })
        } else if (!companyName || companyName.length === 0) {
          setMessage({
            text: t("fieldRequired").replace("$field", t("companyName")),
            className: "error"
          })
        } else if (!firstName || firstName.length === 0) {
          setMessage({
            text: t("fieldRequired").replace("$field", t("firstName")),
            className: "error"
          })
        } else if (!lastName || lastName.length === 0) {
          setMessage({
            text: t("fieldRequired").replace("$field", t("lastName")),
            className: "error"
          })
        } else {
          const body = `\nName: ${firstName} ${lastName}\nCompany: ${companyName} (${acreage} acres)\nNote:\n${contactMessage}`

          const response = await submitContactForm(email, body);
          if (!response) {
            setMessage({
              text:t("failedtoSubmitContactForm"), className:"error"})
          } else if (response && response.status && response.status >= 300) {
            setMessage({
              text: response.message,
              className: "error"
            })
          } else {
            setMessage({
              text:t("submitContactRequestSuccess"),
              className:"success"
            })
            AnalyticsService.logConversion();
            setDidSubmit(true);
          }
      }
    };

    return(
      <Container style={didSubmit ? {}: {maxWidth:"800px"}}>
          <Fade in={didSubmit}> 
          <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                {/* Centered Title */}
                <h2 className="company-title">{t("loveToHearFromYou")}</h2>
                <hr className="company-title"></hr>
                </Col>
            </Row>
          <Row className="mt-4 justify-content-center">
            <div className="zoom-scheduler-container">
              <iframe
                src={`https://scheduler.zoom.us/d/1i222xhk/sentinel-demo?embedStyle=%7B%22backgroundColor%22%3A%22%23ffffff%22%2C%22textColor%22%3A%22%23000000%22%2C%22buttonColor%22%3A%22%239e9e9e%22%7D&embed=true`}
                title="Zoom Scheduler"
                className="zoom-scheduler-iframe"
              />
            </div>          
          </Row>

        </Fade>
        <Fade in={!didSubmit}>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                {/* Centered Title */}
                <h2 className="company-title">{t("loveToHearFromYou")}</h2>
                <hr className="company-title"></hr>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col>
                <Form className="register-form" onSubmit={handleSubmit}>
                  <Form.Group className="d-inline-block me-2">
                    <Form.Label className="company-text">{t("pleaseProvideYourEmail")}</Form.Label>
                    <Form.Control
                      id="email"
                      className="form-field"
                      placeholder={t("email")}
                      name="email"
                      type="text" onChange={e => handleChange(e)}
                    />
                  </Form.Group>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        id="firstName"
                        className="form-field"
                        placeholder={t("firstName")}
                        name="firstName"
                        type="text" onChange={e => handleChange(e)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        id="lastName"
                        className="form-field"
                        placeholder={t("lastName")}
                        name="lastName"
                        type="text" onChange={e => handleChange(e)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        id="companyName"
                        className="form-field"
                        placeholder={t("companyName")}
                        name="companyName"
                        type="text" onChange={e => handleChange(e)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        id="acreage"
                        className="form-field"
                        placeholder={t("acreage")}
                        name="acreage"
                        type="numeric" onChange={e => handleChange(e)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                
                  <Form.Control
                    as="textarea"
                    style={{height:"15vh"}}
                    id="contactMessage"
                    className="form-field"
                    placeholder={t("pleaseWriteYourMessage")}
                    name="contactMessage"
                    onChange={e => handleChange(e)}
                  />
                  <Row>
                  <Col>
                  <Form.Group className='d-flex justify-content-center align-items-center'>
                  <button className="header-button demo-button darken" type="submit">
                  {t("Submit")}
                  </button>
                  {message && (
                    <div className={message.className}>
                      {message.text}
                    </div>
                  )}
                  </Form.Group>
                  </Col>
                  </Row>
            </Form>
            </Col>
            </Row>
            <Spacer height={300}/>
        </Fade>
      </Container>
    );
}
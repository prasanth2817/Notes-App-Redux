import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../Redux/userSlice";
import { Formik } from "formik";
import * as Yup from "yup";

function Create() {
  let [title, setTitle] = useState("");
  let [notes, setNotes] = useState("");
  let dispatch = useDispatch();
  const createNotes = (values, { resetForm }) => {
    const payload = {
      title: values.title,
      notes: values.notes,
    };
    dispatch(add(payload));
    resetForm();
  };
  const Userschema = Yup.object().shape({
    title: Yup.string().required("*Required"),
    notes: Yup.string().required("*This Field Should not be Empty"),
  });
  return (
    <Card className="customize-card">
      <Card.Header>Add a Note</Card.Header>
      <Card.Body>
        <Formik
          initialValues={{ title: "", notes: "" }}
          validationSchema={Userschema}
          onSubmit={createNotes}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="title"
                  className="text-area"
                  placeholder="Title"
                  onChange={handleChange}
                  value={values.title}
                />
                {errors.title && touched.title ? (
                  <div style={{ color: "red" }}>{errors.title}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="notes"
                  className="text-area"
                  placeholder="Take a Note"
                  onChange={handleChange}
                  value={values.notes}
                />
                {errors.notes && touched.notes ? (
                  <div style={{ color: "red" }}>{errors.notes}</div>
                ) : null}
              </Form.Group>
              <Button variant="primary" className="save-button" type="submit">
                <span className="fa-solid fa-check"></span>
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default Create;

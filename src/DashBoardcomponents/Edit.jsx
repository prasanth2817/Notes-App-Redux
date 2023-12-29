import React, { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

function Edit() {
  let [title, setTitle] = useState("");
  let [notes, setNotes] = useState("");
  const params = useParams();
  const Notes = useSelector((state) => state.Notes);
  let Navigate = useNavigate();
  let dispatch = useDispatch();
  const createNotes = (values) => {
    const payload = {
      id: Number(params.id),
      ...values,
    };
    dispatch(edit(payload));
    Navigate("/Dashboard");
  };
  const Userschema = Yup.object().shape({
    title: Yup.string().required("*Required"),
    notes: Yup.string().required("*This Field Should not be Empty"),
  });

  const getData = () => {
    const noteIndex = Notes.findIndex((note) => note.id === Number(params.id));
    console.log("Note Index:", noteIndex);
    if (noteIndex !== -1) {
      setTitle(Notes[noteIndex].title);
      setNotes(Notes[noteIndex].notes);
    } else {
      Navigate("/Dashboard");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Card className="customize-card">
      <Card.Header>Edit a Note</Card.Header>
      <Card.Body>
        <Formik
          initialValues={{ title: title, notes: notes }}
          validationSchema={Userschema}
          enableReinitialize={true}
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

export default Edit;

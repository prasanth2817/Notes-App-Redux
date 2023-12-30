import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../Redux/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { Formik } from "formik";
import * as Yup from "yup";

function Edit() {
  const Notes = useSelector((state) => state.Notes);
  const Navigate = useNavigate();
  let [initialValues, setIntialvalues] = useState({ title: "", notes: "" });
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Userschema = Yup.object().shape({
    title: Yup.string().required("*Required"),
    notes: Yup.string().required("*This Field Should not be Empty"),
  });
  const createNotes = (values) => {
    console.log(values);
    const payload = {
      ...values,
      id: params.id,
    };
    console.log(payload);
    dispatch(edit(payload));
    Navigate("/Dashboard");
  };
  const getData = (index) => {
    console.log(index);
    const newArray = { ...Notes };
    console.log(newArray);
    newArray.title = Notes[index].title;
    newArray.notes = Notes[index].notes;
    setIntialvalues(newArray);
  };
  useEffect(() => {
    if (Number(params.id < Notes.length)) {
      getData(Number(params.id));
    } else {
      navigate("/Dashboard");
    }
  }, []);

  return (
    <Card className="customize-card-edit">
      <Card.Header className="card-header">Edit a Note</Card.Header>
      <Card.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={Userschema}
          enableReinitialize={true}
          onSubmit={createNotes}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="title"
                  className="text-area"
                  placeholder="Title"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
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

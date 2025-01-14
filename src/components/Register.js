import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { getDiplomas } from "../api";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef = useRef(null);

  const diplomas = getDiplomas();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", { state: { name: nameRef.current.value, email: emailRef.current.value, course: courseRef.current.value } });
  }

  return (
    <div className="container">
      <h1>Register your interest</h1>
      <p>
        Please register the course you are interested!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Course:
          <select name="diplomas" id="diplomas" className="course-list-dropdown">
            <option value="" disabled selected>
              Select a course
            </option>
            {diplomas.map(diploma => (
              <option value={diploma.name} ref={courseRef}>{diploma.name}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



function ContactForm() {
    const [state, handleSubmit] = useForm("mgvwkyke");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    );
  }
  
  function App() {
    return (
      <ContactForm />
    );
  }
  
  export default App;


  //입력폼 메일 전송

  var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }

  form.addEventListener("submit", handleSubmit)

  //세부사항 엔터키 제출 방지
  const inputCon = document.getElementById("input_con");

    inputCon.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            alert("엔터 키로 제출되지 않습니다.");
        }
    });


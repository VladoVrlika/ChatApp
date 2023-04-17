import React, {useState} from 'react';

function Input(props) {
  const [text, setText] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    setText("");

    if (text !==""){
      props.onSendMessage(text);
    } else if (text == ""){
      alert('Please enter your message!');
    }
  };
  

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="Input">
      <form onSubmit={(e) => onSubmitForm(e)}>
        <input
          onChange={(e) => onChangeText(e)}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus={true}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Input;
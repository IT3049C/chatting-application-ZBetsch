//Constants for name, message, the send button, and the chatbox
const nameInput = document.getElementById("my-name-input");
const myMessage = document.getElementById("my-message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");

function messageFormat (message, myNameInput){
  const time = new Date(message.timestamp);
  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;

  if (myNameInput === message.sender) {
    return
      `<div class="mine messages">
        <div class="message">
          ${message.text}
        </div>
        <div class="sender-info">
          ${formattedTime}
        </div>
      </div>`
    ;    
  }
  else {
    return
    `<div class="yours messages">
      <div class="message">
        ${message.text}
      </div>
      <div class="sender-info">
        ${message.sender} ${formattedTime}
      </div>
    </div>`
  }

  function fetchMessages(){
    function fetchMessages() {
      return [
        {
          id: 1,
          text: "This is my message",
          sender: "Yahya Gilany",
          timestamp: 1537410673072
        },
        {
          id: 2,
          text: "This is another message",
          sender: "Yahya Gilany",
          timestamp: 1537410673072
        },
        {
          id: 3,
          text: "This is a message from someone else",
          sender: "Someone Else",
          timestamp: 1537410673072
        }
      ];
    }
  }


}

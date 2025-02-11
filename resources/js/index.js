//Constants for name, message, the send button, and the chatbox
const nameInput = document.getElementById("my-name-input");
const myMessage = document.getElementById("my-message-input");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");
const serverURL = `https://it3049c-chat.fly.dev/messages`;

function messageFormat (message, myNameInput){
  const time = new Date(message.timestamp);
  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;

  if (myNameInput === message.sender) {
    return `<div class="mine messages">
        <div class="message">
          ${message.text}
        </div>
        <div class="sender-info">
          ${formattedTime}
        </div>
      </div>`;    
  }
  else {
    return `<div class="yours messages">
      <div class="message">
        ${message.text}
      </div>
      <div class="sender-info">
        ${message.sender} ${formattedTime}
      </div>
    </div>`
  }
}


function fetchMessages() {
  return fetch(serverURL)
    .then(response => response.json());
}

  async function updateMessagesInChatBox(){
    const messages = await fetchMessages();
    let formattedMessages = "";
    messages.forEach(message => {
      formattedMessages += messageFormat(message, nameInput.value);
    });
    chatBox.innerHTML = formattedMessages;
  }

  


  async function sendMessages(username, text){
    const message = {
      sender: username,
      text: text,
      timestamp: new Date().toISOString()
    };

    await fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });
    await updateMessagesInChatBox();
  }

  sendButton.addEventListener("click", async function(event) {
    event.preventDefault();
    const sender = nameInput.value;
    const message = myMessage.value;
    await sendMessages(sender, message);
    myMessage.value = "";
  });

  //TEST CODE
  //TESTING FOR CHATBOX UPDATE
  // sendButton.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   updateMessagesInChatBox();
  // });

  updateMessagesInChatBox();
  setInterval(updateMessagesInChatBox, 10000);

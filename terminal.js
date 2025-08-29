
const terminal = document.getElementById('terminal');

const messages = [
  "Initializing mainframe...",
  "Loading AI modules...",
  "Connecting to VTuber system...",
  "Memory check: OK",
  "All systems online.",
  "Welcome, user.",
  "",
  "Mainframe is a neuro-sama like project.",
  "An ai VTuber that runs offline, and it's main purpose is to entretain and talk to chat and the user.",
  "The main script to integrate the A.I. and the unity avatar is made using ollama python library.",
  "An avatar is controlled through a websocket and unity recieves the data and animates the 3D model.",
  "Basically the A.I. has acess to tools and can use them to make web searches, save memories and send emotion and animation data to unity.",
  "A demo shall be published in the future.",
  "For now you can check the GitHub page and look through the code.",
];

let i = 0;

function printMessage() {
  if(i >= messages.length) return;
  
  const message = messages[i];
  let j = 0;
  
  function typeWriter() {
    if(j < message.length) {
      // glitch effect random chance
      const char = message[j];
      if(Math.random() < 0.05 && char !== ' ') {
        const glitchSpan = document.createElement('span');
        glitchSpan.className = 'glitch';
        glitchSpan.setAttribute('data-text', char);
        glitchSpan.textContent = char;
        terminal.appendChild(glitchSpan);
      } else {
        terminal.textContent += char;
      }
      j++;
      terminal.scrollTop = terminal.scrollHeight;
      setTimeout(typeWriter, 25 + Math.random()*25); // velocidade irregular
    } else {
      terminal.textContent += '\n';
      i++;
      setTimeout(printMessage, 300 + Math.random()*200);
    }
  }
  
  typeWriter();
}

printMessage();

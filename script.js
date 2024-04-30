function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
  
    // Mostrar el mensaje del usuario en el chat
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerHTML = "<strong>Tu:</strong> " + userInput;
    chatBox.appendChild(userMessage);
  
    // Responder al mensaje del usuario (aquí puedes implementar la lógica de tu chatbot)
    var botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    
    // Definiciones de biología
    var biologyDefinitions = [
      "La biología es la ciencia que estudia los seres vivos y su entorno.",
      "La biología es el estudio de la vida y los organismos vivos, incluyendo su estructura, función, crecimiento, origen, evolución y distribución.",
      "La biología es la disciplina científica que se encarga del estudio de los seres vivos, su origen, evolución y relaciones.",
      "La biología es la ciencia que investiga los procesos vitales de los organismos y su relación con el medio ambiente."
    ];

    // Definiciones de geografía
    var geographyDefinitions = [
      "La geografía es la ciencia que estudia la superficie terrestre, las sociedades que la habitan y los territorios, paisajes, lugares o regiones que la forman al relacionarse entre sí.",
      "La geografía es la disciplina que se encarga de analizar y describir la Tierra en su aspecto físico, humano y económico.",
      "La geografía es la ciencia que estudia la relación entre los seres humanos y su entorno físico, así como la distribución espacial de los fenómenos físicos y humanos en la superficie terrestre."
    ];

    // Definiciones de pronombres en inglés
    var pronounsDefinitions = [
      "En inglés, los pronombres personales son: I (yo), you (tú, usted), he (él), she (ella), it (ello), we (nosotros), they (ellos, ellas).",
      "Los pronombres en inglés son palabras que sustituyen a los sustantivos para evitar la repetición. Algunos pronombres personales en inglés son: I (yo), you (tú, usted), he (él), she (ella), it (ello), we (nosotros), they (ellos, ellas)."
    ];
    
    // Verificar si el usuario preguntó "¿Qué es la biología?"
    if (userInput.toLowerCase().includes("¿qué es la biología?") || userInput.toLowerCase().includes("que es la biologia?")) {
      // Seleccionar una definición aleatoria de biología
      var randomIndex = Math.floor(Math.random() * biologyDefinitions.length);
      botMessage.innerHTML = "<strong>Mi asistente 132:</strong> " + biologyDefinitions[randomIndex];
    } else if (userInput.toLowerCase().includes("¿qué es un verbo?") || userInput.toLowerCase().includes("que es un verbo?")) {
      // Respuesta sobre qué es un verbo en español
      botMessage.innerHTML = "<strong>Mi asistente 132:</strong> Un verbo es una palabra que expresa acción, estado o fenómeno en una oración. Por ejemplo: correr, saltar, ser, estar, etc.";
    } else if (userInput.toLowerCase().includes("¿qué es la geografía?") || userInput.toLowerCase().includes("que es la geografia?")) {
      // Seleccionar una definición aleatoria de geografía
      var randomIndex = Math.floor(Math.random() * geographyDefinitions.length);
      botMessage.innerHTML = "<strong>Mi asistente 132:</strong> " + geographyDefinitions[randomIndex];
    } else if (userInput.toLowerCase().includes("¿cuáles son los pronombres en inglés?") || userInput.toLowerCase().includes("cuales son los pronombres en ingles?")) {
      // Seleccionar una definición aleatoria de pronombres en inglés
      var randomIndex = Math.floor(Math.random() * pronounsDefinitions.length);
      botMessage.innerHTML = "<strong>Mi asistente 132:</strong> " + pronounsDefinitions[randomIndex];
    } else {
      // Respuestas aleatorias
      var randomResponses = [
        "¡Hola! ¿Cómo puedo ayudarte hoy?",
        "Estoy aquí para ayudarte. ¿En qué puedo asistirte?",
        "¿Necesitas ayuda con algo en particular?",
        "¿Cómo estás hoy?",
        "¿Hay algo en lo que necesites ayuda?"
      ];
      
      // Respuesta aleatoria por defecto
      var response = randomResponses[Math.floor(Math.random() * randomResponses.length)]; 
      
      botMessage.innerHTML = "<strong>Mi asistente 132:</strong> " + response;
    }
    
    chatBox.appendChild(botMessage);
  
    // Limpiar el campo de entrada
    document.getElementById("user-input").value = "";
  
    // Hacer scroll hacia abajo para mostrar el último mensaje
    chatBox.scrollTop = chatBox.scrollHeight;
  }

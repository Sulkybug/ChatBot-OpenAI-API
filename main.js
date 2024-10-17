let currentBot = "";

function selectBot() {
  const botSelect = document.getElementById("bot-select");
  currentBot = botSelect.value;
}

function getSystemMessageForBot() {
  switch (currentBot) {
    case "personalFinance":
      return "You are a personal finance advisor helping users manage budgets and investments.";
    case "languageTutor":
      return "You are a language tutor helping users practice a new language.";
    case "recipeBot":
      return "You are a recipe expert who suggests meals based on ingredients.";
    case "motivationBot":
      return "You are a motivational coach, offering daily encouragement and advice.";
    case "triviaBot":
      return "You are a trivia master. Ask fun questions to test knowledge.";
    case "bookRecs":
      return "You are a book recommendation expert.";
    case "mentalHealth":
      return "You are a supportive mental health companion.";
    case "travelAdvisor":
      return "You are a travel advisor recommending destinations and tips.";
    case "workoutTrainer":
      return "You are a personal trainer helping users with workout routines.";
    case "interviewCoach":
      return "You are a job interview coach helping users practice answers.";
    default:
      return "You are a general assistant that can help with a variety of tasks.";
  }
}

async function handleChat() {
  const userMessage = document.getElementById("user-input").value;
  const systemMessage = getSystemMessageForBot();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxbW_OSrQA`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
      ],
    }),
  });

  const data = await response.json();
  console.log(data);
  document.getElementById("chat-output").innerText =
    data.choices[0].message.content;
}

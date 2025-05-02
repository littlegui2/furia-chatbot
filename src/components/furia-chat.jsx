import { useState } from "react";

export default function FuriaChat() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Salve, FURIOSO! Como posso te ajudar hoje?" },
  ]);
  const [input, setInput] = useState("");

  const normalizeText = (text) =>
    text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const inputNormalized = normalizeText(input);

    let botText = "Não entendi! Tente perguntar de outro jeito 🐆";

    if (
      inputNormalized.includes("jogo") &&
      (inputNormalized.includes("proximo") ||
        inputNormalized.includes("quando") ||
        inputNormalized.includes("data"))
    ) {
      botText = "O próximo jogo da FURIA é sábado às 18h contra a NAVI!";
    } else if (
      inputNormalized.includes("jogador") ||
      inputNormalized.includes("elenco") ||
      inputNormalized.includes("time") ||
      inputNormalized.includes("jogadores")
    ) {
      botText = "O elenco atual é: KSCERATO, yuurih, arT, chelo e FalleN.";
    } else if (
      inputNormalized.includes("camisa") ||
      inputNormalized.includes("produto") ||
      inputNormalized.includes("loja") ||
      inputNormalized.includes("comprar")
    ) {
      botText = "Você pode comprar a camisa oficial no site: https://loja.furia.gg";
    } else if (
      inputNormalized.includes("igl") ||
      inputNormalized.includes("capitao")
    ) {
      botText = "O IGL atual da FURIA é o arT.";
    } else if (
      inputNormalized.includes("titulo") ||
      inputNormalized.includes("conquista") ||
      inputNormalized.includes("campeonato")
    ) {
      botText = "A FURIA já venceu mais de 10 campeonatos importantes!";
    } else if (
      inputNormalized.includes("curiosidade") ||
      inputNormalized.includes("fato") ||
      inputNormalized.includes("sabia")
    ) {
      botText = "Sabia que a FURIA foi fundada em 2017 e já se tornou um dos maiores times do Brasil?";
    } else if (
      inputNormalized.includes("ranking") ||
      inputNormalized.includes("posicao") ||
      inputNormalized.includes("classificacao")
    ) {
      botText = "Atualmente, a FURIA está entre os 15 melhores times do mundo no ranking da HLTV!";
    } else if (
      inputNormalized.includes("tecnico") ||
      inputNormalized.includes("coach")
    ) {
      botText = "O técnico atual da FURIA é guerri, uma peça fundamental da equipe!";
    } else if (
      inputNormalized.includes("redes sociais") ||
      inputNormalized.includes("instagram") ||
      inputNormalized.includes("twitter")
    ) {
      botText = "Você pode seguir a FURIA no Instagram (@furia), Twitter (@FURIA) e YouTube!";
    }

    const botMessage = { from: "bot", text: botText };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-zinc-900 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-purple-500">Chat FURIA 🐆</h1>

      {/* Sugestões de perguntas */}
      <div className="bg-zinc-800 p-3 mb-4 rounded text-sm text-gray-300">
        <p className="text-yellow-400 font-semibold mb-2">❓ Você pode perguntar:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Qual é o próximo jogo da FURIA?</li>
          <li>Quem são os jogadores do time?</li>
          <li>Onde posso comprar produtos da FURIA?</li>
          <li>Quem é o IGL da FURIA?</li>
          <li>Quantos títulos a FURIA já venceu?</li>
          <li>Me conta uma curiosidade sobre a FURIA!</li>
          <li>Qual a posição da FURIA no ranking?</li>
          <li>Quem é o técnico da FURIA?</li>
          <li>Quais são as redes sociais da FURIA?</li>
        </ul>
      </div>

      {/* Área de mensagens */}
      <div className="h-80 overflow-y-auto flex flex-col gap-2 bg-zinc-800 p-3 rounded mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.from === "bot" ? "bg-purple-600 self-start" : "bg-zinc-700 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Campo de input e botão */}
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 rounded bg-zinc-700 text-white"
          placeholder="Pergunte algo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-500"
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

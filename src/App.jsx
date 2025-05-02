import React, { useState } from "react";
import FuriaChat from "./components/furia-chat";

export default function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div
          className="min-h-screen flex items-center justify-center text-white p-4"
          style={{
            backgroundImage: "url('/furia.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backgroundBlendMode: "overlay",
          }}
        >
      {!showChat ? (
        <div className="text-center space-y-6 max-w-xl">
          <h1 className="text-4xl font-bold text-yellow-400">FURIA Chatbot</h1>
          <p className="text-lg">Seja bem-vindo, fã FURIOSO!</p>
          <p className="text-sm text-gray-400">
            Aqui você vai trocar ideia com nosso bot e viver a experiência da torcida!
          </p>
          <button
            onClick={() => setShowChat(true)}
            className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition"
          >
            Começar Conversa
          </button>

          <div className="mt-8 text-left">
            <h2 className="text-lg font-semibold text-yellow-300">❓ Perguntas que você pode fazer:</h2>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
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
        </div>
      ) : (
        <FuriaChat />
      )}
    </div>
  );
}

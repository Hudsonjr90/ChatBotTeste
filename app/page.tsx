export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <header className="flex items-center p-4 border-b">
        <div className="flex items-center space-x-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
            <img
              alt="Logo"
              height="40"
              src="/logo.png"
              style={{ aspectRatio: '40/40', objectFit: 'cover' }}
              width="40"
            />
          </span>
          <h1 className="text-xl font-bold">Mateus Mendes</h1>
        </div>
      </header>
      <div className="flex flex-col p-4 overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start">
            Esse aqui é um exemplo de Chatbot, aqui onde você inciará o seu
            teste.
          </div>
          <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start">
            Siga as instruções detalhadas no Notion oficial e boa sorte!
          </div>
        </div>
        <div className="flex items-center gap-4 my-4">
          <img
            alt="Avatar"
            className="rounded-full"
            height="30"
            src="/logo.png"
            style={{ aspectRatio: '40/40', objectFit: 'cover' }}
            width="30"
          />
          <div className="flex-1">
            <div className="rounded-lg border p-4 text-sm">
              Olá, estou interessado na vaga, comecarei agora mesmo.
            </div>
          </div>
        </div>
        <form className="flex items-center gap-4 border-t p-4">
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-w-0"
            placeholder="Digite sua mensagem aqui..."
          />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full w-10 h-10"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

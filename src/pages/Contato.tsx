function Contato() {
  return (
    <section className="pagina">

      <h1>Entre em Contato Conosco</h1>

      <form>

        <label>Nome:</label>

        <input
          type="text"
          placeholder="Digite seu nome"
        />

        <label>E-mail:</label>

        <input
          type="email"
          placeholder="Digite seu e-mail"
        />

        <label>Mensagem:</label>

        <textarea
          placeholder="Digite sua mensagem"
        />

        <button type="submit">
          Enviar
        </button>

      </form>

    </section>
  );
}

export default Contato;
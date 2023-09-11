export function HomeSearchInput() {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">
          Sobre o que quer pesquisar na Palavra?
        </span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text-alt">
          Nomes (ou títulos) de pessoas ou eventos
        </span>
      </label>
    </div>
  )
}

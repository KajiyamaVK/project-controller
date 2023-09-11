import { MdNewReleases } from 'react-icons/md'

interface IData {
  companyName: string
  status: string
  lastInteractionDate: string
}

interface IProjectCardProps {
  newInfo?: boolean
  data: IData
}
export function ProjectCard(
  { newInfo, data }: IProjectCardProps = {
    newInfo: false,
    data: {
      companyName: '',
      status: '',
      lastInteractionDate: '',
    },
  },
) {
  return (
    <div className="card min-w-64 w-full shadow-xl  ">
      <header className=" items-center justify-between w-full flex py-2 px-5 bg-primary rounded-t-lg">
        <h2 className="text-primary-content">{data.companyName}</h2>

        {newInfo && (
          <MdNewReleases
            className="text-warning text-xl "
            title="Nova movimentação"
          />
        )}
      </header>
      <div className="card-body bg-base-200 rounded-b-lg p-3">
        <div className="flex gap-2 items-center justify-between">
          <b>Status:</b>
          <p>{data.status}</p>
          <a className="link" target="_blank" href="https://www.sinqia.com.br">
            Vaga
          </a>
        </div>
        <div className="flex gap-2 justify-between text-right">
          <strong>Última interação:</strong>
          <p>{data.lastInteractionDate}</p>
        </div>
        <footer className="card-actions justify-end ">
          <button className="btn btn-link p-0">Detalhes</button>
        </footer>
      </div>
    </div>
  )
}

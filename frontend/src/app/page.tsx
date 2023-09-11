import { ProjectCard } from '@/components/ProjectCards'
import { Home } from './Home'
import { PhaseColumn } from '@/components/PhaseColumn'
import { MdNewReleases } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'
export default function Index() {
  return (
    <div className="p-5 flex flex-col gap-5  items-center max-w-6xl mx-auto ">
      <div className="flex gap-3 w-full justify-between items-center">
        <div className="flex flex-row gap-2 w-fit">
          <b>Total de aplicações:</b>
          <p>35</p>
        </div>

        <div className="form-control w-4/5 flex flex-row justify-end items-center gap-2">
          <span className="underline cursor-pointer">Filtros</span>
          <span className="underline cursor-pointer">Ordenar</span>
          <p className="underline cursor-pointer">Limpar filtros</p>
          <input
            type="text"
            placeholder="Nome da empresa"
            className="input input-bordered w-full max-w-xs"
          />
          <IoSearchSharp className="text-2xl cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-5 w-full justify-between">
        <PhaseColumn title="Ativas" type="active">
          <ProjectCard newInfo />
          <ProjectCard />
          <ProjectCard />
        </PhaseColumn>
        <PhaseColumn title="Canceladas" type="canceled">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </PhaseColumn>
        <PhaseColumn title="Finalizadas" type="finished">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </PhaseColumn>
      </div>
    </div>
  )
}

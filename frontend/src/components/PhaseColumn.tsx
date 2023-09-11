import { ReactNode } from 'react'
import { CircleWithIcon } from './CircleWithIcon'
import { statusType } from '@/interfaces/statusType'

interface IPhaseColumnProps {
  children: ReactNode
  title: string

  type: statusType
}
export function PhaseColumn({ children, title, type }: IPhaseColumnProps) {
  return (
    <div className=" w-full min-h-full rounded-t-lg bg-gray-200">
      <div className="p-3 bg-primary flex gap-2 items-center">
        <CircleWithIcon type={type} />
        <b className="text-primary-content">{title}</b>
      </div>
      <div className="flex flex-col gap-5 justify-center w-full items-center py-10 px-5">
        {children}
      </div>
    </div>
  )
}

import { statusType } from '@/interfaces/statusType'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { RiForbid2Fill } from 'react-icons/ri'

interface ICircleWithIconProps {
  type: statusType
}
export function CircleWithIcon({ type }: ICircleWithIconProps) {
  return (
    <div className="bg-gray-100 rounded-full w-fit flex items-center justify-center">
      {type === 'active' && (
        <AiFillCheckCircle className="text-success text-2xl text-bold" />
      )}
      {type === 'canceled' && (
        <RiForbid2Fill className="text-error text-2xl text-bold" />
      )}
      {type === 'finished' && (
        <AiFillCloseCircle className="text-black text-2xl text-bold" />
      )}
    </div>
  )
}

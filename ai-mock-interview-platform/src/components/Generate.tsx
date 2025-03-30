// Genearte page with dashboard and generate form
import { Outlet } from 'react-router'

export const Generate = () => {
  return (
    <div className="flex-col md:px-12">
        <Outlet/>
    </div>
  )
}

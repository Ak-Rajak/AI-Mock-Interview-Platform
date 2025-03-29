import Containers from "@/components/Containers"


const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Containers>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className=" text-outline font-extrabold md:text-8xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold">
              - A better way to
            </span>
            <br /> 
            improve your interview chances and skills
          </h2>
        </div>
      </Containers>
    </div>
  )
}

export default HomePage
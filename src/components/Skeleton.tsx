export default function Skeleton() {
  return (
    <main className="pt-32 md:w-[80vw] m-auto">
      <div className="animate-pulse flex space-y-4 md:space-y-0 md:space-x-3 flex-wrap pl-3">
        <div className=" w-[340px] md:w-[500px]">
          <div className="bg-gray-200 py-32 rounded-md"></div>
          <div className="mt-2 bg-gray-200 py-5 w-1/2 rounded-md"></div>
          <div className="mt-3">
            <p className="mt-2 py-1 bg-gray-200 rounded-md"></p>
            <p className="mt-2 py-1 bg-gray-200 rounded-md"></p>
            <p className="mt-2 py-1 bg-gray-200 rounded-md"></p>
            <p className="mt-2 py-1 bg-gray-200 rounded-md"></p>
          </div>
        </div>
        <div className=" w-[340px] md:w-[500px]">
          <div className="bg-gray-200 py-32 rounded-md"></div>
          <div className="mt-2 bg-gray-200 py-5 w-1/2 rounded-md"></div>
          <div className="mt-3">
            <p className="mt-2 py-1 bg-gray-200 rounded-md"></p>
            <p className="mt-2 py-1 bg-gray-200 rounded-md"></p>
            <p className="mt-2 py-1 bg-gray-200 rounded-md"></p>
            <p className="mt-2 py-1 bg-gray-200 rounded-md"></p>
          </div>
        </div>
      </div>
    </main>
  );
}

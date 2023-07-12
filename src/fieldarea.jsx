export default function FieldArea() {
  return (
    <div>
      <div className="text-center py-[8%] bg-white">
        <h1 className="font-bold text-xl md:text-4xl lg:text-4xl py-2">
          Sign up now & get 10% off
        </h1>
        <p className="text-sm md:text-lg  lg:text-lg  py-5">
          Be the first to get the latest news about trends, promotions, and much
          more!
        </p>
        <form>
          <input
            placeholder="Your Email Address"
            required
            type="text"
            className="lg:p-5 w-[200px] lg:w-[50%] md:w-[50%] md:p-5 p-2 m-1 border-solid border-2"
          ></input>
          <button
            className="w-24 md:w-28 lg:w-36 md:p-5  ml-2 lg:p-5 p-2 bg-neutral-900 m-1 text-white"
            type="submit"
          >
            JOIN
          </button>
        </form>
      </div>
    </div>
  );
}
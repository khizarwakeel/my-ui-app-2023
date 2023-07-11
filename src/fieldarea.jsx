export default function FieldArea() {
  return (
    <div>
      <div className="text-center py-[8%] bg-white">
        <h1 className="font-bold text-4xl py-2">Sign up now & get 10% off</h1>
        <p className="text-lg  py-5">
          Be the first to get the latest news about trends, promotions, and much
          more!
        </p>
        <form>
          <input placeholder="Your Email Address" required type="text" className="p-5 w-[50%] border-solid border-2"></input>
          <button className="w-36 ml-5 p-5 bg-neutral-900 text-white" type="submit">JOIN</button>
        </form>
      </div>
    </div>
  );
}

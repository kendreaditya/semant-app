import Header from "@/app/_components/header";
import SearchBar from "@/app/_components/searchbar";
import References from "@/app/_components/references";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-4">
        <Header />
        {/* <div className="w-full max-w-7xl grid grid-cols-5 gap-8 mt-16"> */}
        <div className="w-full max-w-7xl gap-8 mt-16 md:grid md:grid-cols-5">
          <div className="col-start-1 col-span-1 flex items-center justify-end">
            <h1 className="text-4xl font-semibold">semant</h1>
          </div>
          <div className="col-start-2 col-span-3">
            <SearchBar />
          </div>
          <div className="col-start-2 col-span-3 relative max-h-[12rem] overflow-hidden">
            <div
              className="w-full h-full absolute"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, black 100%)",
              }}
            />
            <div className="glow-container p-5">
              <p className="text-sm">
                Async in JavaScript refers to asynchronous programming, which is
                a model that allows multiple things to happen at the same time.
                In JavaScript, async functions return a promise of nothing, and
                the async keyword is placed before a function to identify it as
                asynchronous.
                <br />
                <br />
                Concurrency in C refers to concurrent execution, which is when
                multiple tasks are executed at the same time but not necessarily
                simultaneously. Concurrency can be achieved through
                multithreading, which is when different threads are doing
                different things at the same time.
                <br />
                <br />
                Therefore, the main difference between async in JavaScript and
                concurrency in C is that async is a programming model, whereas
                concurrency is a type of execution. Async is about the way
                functions are executed, while concurrency is about how multiple
                tasks are handled.
              </p>
            </div>
          </div>
          <div className="col-start-5 col-span-3 relative max-h-[12rem] overflow-hidden">
            <div
              className="w-full h-full absolute"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, black 100%)",
              }}
            />
            <div className="glow-container p-5">
              <References />
            </div>
          </div>
          <div className="col-span-full space-y-4">
            <p className="text-center text-[4rem] font-semibold leading-[5rem]">
              <span className="underline underline-offset-8">
                Revolutionizing
              </span>{" "}
              search
              <br />
              from the ground up.
            </p>
          <div className="max-w-[36rem] m-auto text-center">
            Supercharge your productivity with our groundbreaking search, rebuilt
            leveraging the latest AI models and knowledge sources to deliver
            unparalleled speed, relevance, and usability.
          </div>
          </div>
        </div>
      </main>
    </>
  );
}

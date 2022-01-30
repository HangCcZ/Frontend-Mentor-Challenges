import Head from 'next/head'

export default function Home() {
  return (
    <div
      className="background-image flex min-h-screen flex-col items-center justify-center  bg-indigo-200 bg-repeat-x"
      style={{ backgroundImage: `url('/pattern-background-desktop.svg')` }}
    >
      <Head>
        <title>Order Summary Component Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex max-w-md flex-1 flex-col items-center justify-center px-5">
        <div className="">
          <img src="./illustration-hero.svg" className="rounded-t-2xl" />
        </div>

        <div className="rounded-b-3xl bg-very-pale-blue">
          <h2 className="mt-6 text-center text-2xl font-bold text-dark-blue">
            Order Summary
          </h2>

          <p className="text-md mt-5 px-7 text-center font-normal text-desaturated-blue">
            You can now listent to millions of songs, audiobooks, and podcasts
            on any devices anywhere you like!
          </p>

          <div className="mx-5 mt-7 flex items-center rounded-xl bg-indigo-50 py-4 above-mobile:mx-10 ">
            <img src="icon-music.svg" alt="music icon" className="ml-4" />

            <div className="ml-5 flex flex-col">
              <p className="text-sm font-bold text-dark-blue">Annual Plan</p>
              <p className="text-sm font-medium text-desaturated-blue">
                $59.99/year
              </p>
            </div>

            <div className="ml-16 above-mobile:ml-14 above-425px:ml-20 above-450px:ml-24">
              <button className="text-sm font-semibold text-bright-blue underline decoration-wavy hover:text-indigo-400">
                Change
              </button>
            </div>
          </div>
          <div className="mx-5 mt-6 rounded-xl bg-bright-blue px-2 py-3 text-center  shadow-md shadow-indigo-500/50 hover:bg-indigo-500  above-mobile:mx-10">
            <button className="font-semibold text-white">
              Process to Payment
            </button>
          </div>

          <div className=" mx-5 mt-3 mb-7 rounded-xl bg-inherit px-2 py-2 text-center  above-mobile:mx-10">
            <button className="font-bold text-desaturated-blue hover:text-indigo-800">
              Cancel Order
            </button>
          </div>
        </div>
      </main>

      <footer className="mx-4 flex h-24 w-full flex-col items-center justify-center">
        <a href="https://github.com/HangCcZ" className="px-5">
          <p className="underline decoration-wavy">Coded by Hang Chen</p>
        </a>
        <a
          className="flex items-center justify-center "
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}

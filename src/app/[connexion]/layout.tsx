export default function ConnexionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className="bg-gradient-to-br from-blue-500 via-orange-200 to-red-500 "
      >
        <div className="grid place-items-center h-screen">
            <div className="bg-white w-full shadow-lg p-6 md:w-1/2 ">
                <h2 className="sm:text-xs text-black md:text-xl xl:text-3xl font-bold font-serif text-center">CONNEXION</h2>
                <form action="#" method="POST" className="mt-5">
                    {children}
                </form>
            </div>
        </div>
      </div>
  );
}
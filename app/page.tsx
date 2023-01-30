const getData = async (revalidate: number) => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new",
    { cache: "force-cache", next: { revalidate } }
  );
  return await res.json();
};

const Comp = async ({ revalidate }: { revalidate: number }) => {
  const data = await getData(revalidate);
  return (
    <div>
      <>
        Data with revalidate {revalidate}: {data}
      </>
    </div>
  );
};

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <Comp revalidate={0} />
      <Comp revalidate={0} />
      <Comp revalidate={0} />
      <Comp revalidate={0} />
      <Comp revalidate={0} />
      <Comp revalidate={0} />
    </>
  );
}

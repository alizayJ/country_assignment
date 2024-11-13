
import Link from "next/link";

export default function Home() {
 
  return (
 <div className="flex flex-col items-center">
  <h1>Home Page</h1>
  <div className="flex justify-center items-center gap-4">
  <Link  href="/country/[country_name]"  as={`/country/${"Pakistan"}`}>Pakistan</Link>
  <Link  href="/country/[country_name]" as={`/country/${"Qatar"}`}>Qatar</Link>
  <Link  href="/country/[country_name]" as={`/country/${"Turkiye"}`}>Turkiye</Link>
  <Link  href="/country/[country_name]" as={`/country/${"Bangladesh"}`}>Bangladesh</Link>
  <Link  href="/country/[country_name]" as={`/country/${"Brunei"}`}>Brunei</Link>
  </div>
  </div>
  );
}

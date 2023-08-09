import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  function loadPrjectHanlder() {
    // router.push('/clients/dave/a')
    // router.replace( '/clients/dave/a' );
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "projecta",
      },
    });
  }
  console.log(router.query);
  return (
    <div>
      <h1>Hello Clients Project Page</h1>
      <button onClick={loadPrjectHanlder}>Load Project A</button>
    </div>
  );
}

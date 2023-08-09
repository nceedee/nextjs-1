import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Hello Blog Post</h1>
    </div>
  );
}

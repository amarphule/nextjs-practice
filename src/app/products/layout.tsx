
import { Suspense } from "react";
import Loading from "../loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Suspense fallback={<Loading/>}>
      <div >{children}</div>
        </Suspense>
    </div>
  );
}

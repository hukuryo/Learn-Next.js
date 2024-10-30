"use cache";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return (
    <html>
      <body>
        <div>{data.notice}</div>
        {children}
      </body>
    </html>
  );
}

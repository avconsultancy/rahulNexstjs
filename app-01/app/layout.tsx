export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>My App</h1>
          <div>
            <a href={`/`}>Home</a>
            {` `}
            <a href={`/about`}>About</a>
            {` `}
          </div>
          <hr />
        </div>
        <div>{children}</div>
        <div>
          <hr />
          <h1>Footer</h1>
        </div>
      </body>
    </html>
  );
}

export async function onRequest(context) {
  const host = context.request.headers.get("host")
  const sub = host.split(".")[0]

  const data = await context.env.MEUBANCO.get(sub)

  if (!data) {
    return new Response("Site não encontrado")
  }

  const site = JSON.parse(data)

  return new Response(`
    <html>
    <head>
      ${site.metatag || ""}
      <title>${site.razao_social}</title>
    </head>
    <body>
      <h1>${site.razao_social}</h1>
      <p>Telefone: ${site.telefone}</p>
    </body>
    </html>
  `, { headers: { "Content-Type": "text/html" } })
}

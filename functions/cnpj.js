export async function onRequest(context) {
  const url = new URL(context.request.url)
  const cnpj = url.searchParams.get("cnpj")

  if (!cnpj) {
    return new Response(JSON.stringify({ erro: "CNPJ não informado" }), {
      headers: { "Content-Type": "application/json" }
    })
  }

  try {
    const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
    const data = await res.json()

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    })

  } catch (err) {
    return new Response(JSON.stringify({ erro: "Erro ao buscar CNPJ" }), {
      headers: { "Content-Type": "application/json" }
    })
  }
}

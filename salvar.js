export async function onRequestPost(context) {
  const body = await context.request.json()
  const id = body.cnpj

  await context.env.MEUBANCO.put(id, JSON.stringify(body))

  return new Response(JSON.stringify({ ok: true }))
}

export default async (ctx) => {
  await ctx.store.dispatch('session/nuxtClientInit', ctx)
}

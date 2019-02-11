export default function ({ store, redirect }) {
  if (!store.state.session.authenticated) {
    return redirect('/login')
  }
}

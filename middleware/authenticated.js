export default function ({ store, redirect, context }) {
  const users = store.state.localStorage.auth

  // If the user is not authenticated
  if (!users) {
    return redirect('/signin')
  }
}

/*

  if (user) {
    if (route.path == '/login' || route.path == '/user/temporary') {
      return redirect('/')
    }
    return
  }

  if (!user) {
    return redirect('/login')
  }

  */

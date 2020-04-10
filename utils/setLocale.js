export default function (app, route) {
  if (route.path.includes('/no')) {
    app.i18n.setLocale('no')
  }
  if (route.path.includes('/se')) {
    app.i18n.setLocale('se')
  }
}

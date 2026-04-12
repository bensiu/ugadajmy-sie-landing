export default function () {
  return function (content: string): string {
    return content.replaceAll(' z ', ' z&nbsp;')
      .replaceAll(' i ', ' i&nbsp;')
      .replaceAll(' I ', ' I&nbsp;')
      .replaceAll(' w ', ' w&nbsp;')
      .replaceAll(' W ', ' W&nbsp;')
      .replaceAll(' do ', ' do&nbsp;')
      .replaceAll(' na ', ' na&nbsp;')
      .replaceAll(' o ', ' o&nbsp;')
      .replaceAll(' a ', ' a&nbsp;')
      .replaceAll(' A ', ' A&nbsp;')
      .replaceAll(' zł', '&nbsp;zł')
  }
}

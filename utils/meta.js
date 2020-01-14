/**
 * Generates common meta setup for pages
 * @param {string} title The title for the page
 * @param {string} description The description for the page
 * @param {string} url The canonical url for the page
 * @return {{meta: *[], link: {rel: string, href: *}[], title: *}}
 */
export function generateMeta(title, description, url) {
  return {
    title,
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: `${title} - Ship Shape`
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: url
      },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: url
      }
    ]
  };
}

# Adding work images

Drop photos of each piece in here, e.g.:

```
public/projects/sheet-metal-01.jpg
public/projects/spare-our-earth-01.jpg
```

Then open `lib/data.ts` and add the path (starting with `/projects/...`) to that
project's `images` array, for example:

```ts
{
  slug: "sheet-metal",
  title: "Multiple Objects on Sheet Metal",
  meta: "Solo exhibition · PhD research · 2025",
  images: ["/projects/sheet-metal-01.jpg", "/projects/sheet-metal-02.jpg"],
  featured: true,
},
```

The first image in the array is used as the tile's cover photo. Until an
`images` array has at least one path in it, that project shows an honest
"Image pending" placeholder instead of a fake photo — never delete that
fallback, just fill in real paths as photos become available.

You can also add entirely new projects by adding more objects to the
`projects` array in `lib/data.ts` — the grid layout adapts automatically.

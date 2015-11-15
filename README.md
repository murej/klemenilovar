# Klemen Ilovar's portfolio website
Attempt at creating a simple Meteor+React based platform for publishing photography portfolios.

### Data model
```
{
  pages: [
    {
      _id: "",
      createdAt: "",
      content: "",
      background: ""
    },
    ...
  ],
  projects: [
    {
      _id: ""
      createdAt: date
      name: "",
      description: "",
      items: [
        itemId,
        ...
      ],
      // optional
      position: {
        top: (int),
        right: (int),
        bottom: (int),
        left: (int)
      }
      collections: [
        "Collection name",
        ...
      ]
    },
    ...
  ],
  items: [
    {
      _id: "",
      createdAt: "",
      caption: "",
      year: (int)
      url: "",
      // optional
      position: {
        top: (int),
        right: (int),
        bottom: (int),
        left: (int)
      }
      collections: [
        "Collection name",
        ...
      ]
    },
    ...
  ]
}
```

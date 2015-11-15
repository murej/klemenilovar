# Klemen Ilovar's portfolio website
Attempt at creating a simple Meteor+React based platform for publishing photography portfolios.

### Data model
```
{
  pages: [
    {
      _id: "",
      createdAt: "",
      name: "",
      content: "",
      style: {
        backgroundColor: ""
      }
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
      size: (int),    // 0 to 100
      position: {
        x: (int),     // size/2 to 100 - size/2
        y: (int),     // size/2 to 100 - size/2
      },
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
      size: (int),    // 0 to 100
      position: {
        x: (int),     // size/2 to 100 - size/2
        y: (int),     // size/2 to 100 - size/2
      },
      collections: [
        "Collection name",
        ...
      ]
    },
    ...
  ]
}
```

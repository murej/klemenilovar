# Klemen Ilovar's portfolio website
Attempt at creating a simple Meteor+React based platform for publishing photography portfolios.

### Data model
```
{
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
      collections: [
        collectionId,
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
      year: 0000
      url: "",
      collections: [
        collectionId,
        ...
    },
    ...
  ]
}
```

migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glswsohboawbu62")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pufpcjwa",
    "name": "author",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glswsohboawbu62")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pufpcjwa",
    "name": "author",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

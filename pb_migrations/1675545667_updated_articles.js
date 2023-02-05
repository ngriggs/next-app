migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glswsohboawbu62")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glswsohboawbu62")

  // remove
  collection.schema.removeField("pufpcjwa")

  return dao.saveCollection(collection)
})

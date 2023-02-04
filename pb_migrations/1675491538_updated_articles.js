migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glswsohboawbu62")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yoe2wsgj",
    "name": "content2",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glswsohboawbu62")

  // remove
  collection.schema.removeField("yoe2wsgj")

  return dao.saveCollection(collection)
})

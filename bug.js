```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { field: '1' } });
```
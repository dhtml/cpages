export class ObjectStore {
  items = null;
  data = null;

  setItems(items) {
    this.items = items;
  }

  setData(data) {
    this.data = data;
  }

  getItems() {
    return this.items;
  }

  getData() {
    return this.data;
  }

}

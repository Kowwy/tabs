import { read, write } from "./helpers.js";

export class GroupManager {
  constructor() {
    this.init();
  }

  async init() {
    let ids = await this.getGroupIds();
    if (!ids) write({ group_ids: ["test"] });
    console.log(await this.getGroupIds());
    return;
  }

  async getGroupIds() {
    return await read({ group_ids: false });
  }

  async getGroups() {
    return await read(await this.getGroupIds());
  }
}

class Group {
  constructor(id, tabs, config) {
    this.id = id;
    this.tabs = tabs;
    this.config = config;
  }

  saveGroup() {
    return write({ [this.id]: this.tabs });
  }
}

export class Comment {
  constructor(creation_date, username, comment) {
    this.creation_date = creation_date;
    this.username = username;
    this.comment = comment;
  }
}

export class Launch {
  likes;

  comments = [];

  constructor(id, name, lsp_name, mission_type, pad, location, image) {
    this.id = id;
    this.name = name;
    this.lsp_name = lsp_name;
    this.mission_type = mission_type;
    this.pad = pad;
    this.location = location;
    this.image = image;
  }
}
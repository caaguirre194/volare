export class Message {
  constructor(name = "", issue = "", email = "", message = "") {
    this.name = name;
    this.issue = issue;
    this.email = email;
    this.message = message;
  }

  name: string;
  issue: string;
  email: string;
  message: string;
}

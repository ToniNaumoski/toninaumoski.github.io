import {AnnouncementCost} from "./AnnouncementCost";

export class PublisherData {
  constructor(
    private email: string,
    private fullName: string,
    private cost: AnnouncementCost
  ) {
  }
}

import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AnnouncementCost} from "../../../models/AnnouncementCost";
import {PublisherData} from "../../../models/PublisherData";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() {
  }

  private _announcementCostMessageSource = new Subject<AnnouncementCost>();

  get announcementCostMessageSource(): Subject<AnnouncementCost> {
    return this._announcementCostMessageSource;
  }

  set announcementCostMessageSource(value: Subject<AnnouncementCost>) {
    this._announcementCostMessageSource = value;
  }

  private _publisherDataMessageSource = new Subject<PublisherData>();

  get publisherDataMessageSource(): Subject<PublisherData> {
    return this._publisherDataMessageSource;
  }

  set publisherDataMessageSource(value: Subject<PublisherData>) {
    this._publisherDataMessageSource = value;
  }

  private _announcementCostMessage$ = this._announcementCostMessageSource.asObservable();

  get announcementCostMessage$(): Observable<AnnouncementCost> {
    return this._announcementCostMessage$;
  }

  set announcementCostMessage$(value: Observable<AnnouncementCost>) {
    this._announcementCostMessage$ = value;
  }

  private _publisherDataMessage$ = this._publisherDataMessageSource.asObservable();

  get publisherDataMessage$(): Observable<PublisherData> {
    return this._publisherDataMessage$;
  }

  set publisherDataMessage$(value: Observable<PublisherData>) {
    this._publisherDataMessage$ = value;
  }

  emitAnnouncementCost(message: AnnouncementCost) {
    this._announcementCostMessageSource.next(message);
  }

  emitPublisherData(message: PublisherData) {
    this._publisherDataMessageSource.next(message);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ProducerDetail} from "../producer";
import {MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {ProducerService} from "../producer.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['./producer-detail.component.css']
})

export class ProducerDetailComponent implements OnInit {

  @Input() producer?: ProducerDetail;

  constructor(
    private route: ActivatedRoute,
    private producerService: ProducerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProducer();
  }

  getProducer(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.producerService.getProducer(name).subscribe(
      producer => this.producer = producer
    );
    console.log(this.producer);
  }

  goBack(): void {
    this.location.back();
  }
}

@Component({
  selector: 'producer-detail-dialog',
  templateUrl: 'producer-detail-dialog.html',
})
export class ProducerDetailDialog {
  constructor(public dialogRef: MatDialogRef<ProducerDetailDialog>) {}
  producer?: ProducerDetail;
}
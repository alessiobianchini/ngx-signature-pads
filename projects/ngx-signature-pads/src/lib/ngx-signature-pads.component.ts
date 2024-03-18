import { Component, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-signature-pads',
  templateUrl: 'ngx-signature-pads.component.html',
  styles: `
  .canvas-canvas {
    border: 1px solid #000;
  }
  `
})
export class NgxSignaturePadsComponent implements AfterViewInit {
  @Input() width = 500;
  @Input() height = 300;
  @Input() lineWidth = 2;
  @Input() hideSave: boolean = false;
  @Input() hideReset: boolean = false;
  @ViewChild('signCanvas') canvas: any;
  @Output() saveEvent: EventEmitter<string> = new EventEmitter<string>();

  private sigPadElement: any;
  private context: any;
  private holdClick = false;
  private points: Array<{ x: number; y: number; break: boolean; }> = [];

  ngAfterViewInit() {
    this.sigPadElement = this.canvas.nativeElement;
    this.context = this.sigPadElement.getContext('2d');
    this.context.lineJoin = this.context.lineCap = 'round';
  }

  getPosition(evt: any) {
    var rect = this.sigPadElement.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    return {
      x: x,
      y: y,
    };
  }

  onStart(e: UIEvent) {
    this.holdClick = true;
    var mousePosition = this.getPosition(e);
    this.points.push({
      x: mousePosition.x,
      y: mousePosition.y,
      break: false,
    });
  }

  onMove(e: UIEvent) {
    if (this.holdClick) {
      var mousePosition = this.getPosition(e);
      this.draw(mousePosition.x, mousePosition.y);
    }
  }

  onStop(e: UIEvent) {
    e.preventDefault();
    this.holdClick = false;
    this.points[this.points.length - 1].break = true;

    return false;
  }

  reset() {
    this.context.clearRect(
      0,
      0,
      this.sigPadElement.width,
      this.sigPadElement.height
    );
    this.points.length = 0;
  }

  canvasToImage() {
    this.saveEvent.emit(this.sigPadElement.toDataURL('image/png'));
  }

  private draw(x: number, y: number) {
    this.points.push({ x: x, y: y, break: false });
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
    var p1 = this.points[0];
    var p2 = this.points[1];

    this.context.beginPath();
    this.context.moveTo(p1.x, p1.y);

    for (var i = 1; i < this.points.length; i++) {
      var midPoint = this.calculateMiddlePoint(p1, p2);
      if (p1.break) {
        this.context.moveTo(p2.x, p2.y);
      } else {
        this.context.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
      }
      p1 = this.points[i];
      p2 = this.points[i + 1];
    }

    this.context.lineWidth = this.lineWidth;
    this.context.lineTo(p1.x, p1.y);
    this.context.stroke();
  }

  private calculateMiddlePoint(pointStart: any, pointEnd: any) {
    return {
      x: pointStart.x + (pointEnd.x - pointStart.x) / 2,
      y: pointStart.y + (pointEnd.y - pointStart.y) / 2,
    };
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../service/core/http.service';
import echarts from 'echarts';

@Component({
  selector: 'app-lottery-index',
  templateUrl: './lottery-index.component.html',
  styleUrls: ['./lottery-index.component.less']
})
export class LotteryIndexComponent implements OnInit {
  @ViewChild('container') containerRef: ElementRef;

  constructor(private http: HttpService) {
    http.get<any>('api/lottery/list').subscribe( res => {
      console.log(this.containerRef.nativeElement)
      const chart = echarts.init(this.containerRef.nativeElement);
      chart.setOption({
        title: {
          text: '双色球走势图'
        },
        xAxis: {
          data: res.number,
          boundaryGap : false,
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 10
        }],
        yAxis: {},
        series: [
          {
            name: '和值',
            type: 'line',
            data: res.and
          },
          // {
          //   name: '奇偶',
          //   type: 'bar',
          //   data: res.odd
          // },
          // {
          //   name: '大小',
          //   type: 'bar',
          //   data: res.big
          // }
        ]
      });
    });
  }

  ngOnInit() {}

}

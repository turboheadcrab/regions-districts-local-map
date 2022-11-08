import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";

export interface Tile {
  name: string
  color: string;
  cols: number;
  rows: number;
  text: string;
}

const COLOR_WESTERN: string = "#9bf6ff";
const COLOR_MIDAMERICA: string = "#caffbf";
const COLOR_GULF: string = "#a0c4ff";
const COLOR_CENTRAL: string = "#fdffb6";
const COLOR_SOUTHERN: string = "#ffd6a5";
const COLOR_EASTERN: string = "#ffadad";
const COLOR_CANADA: string = "#bdb2ff";

const REGIONS: Tile[] = [
  {
    text: "WR",
    name: "Western",
    color: COLOR_WESTERN,
    cols: 1,
    rows: 1
  },
  {
    text: "MR",
    name: "Midamerica",
    color: COLOR_MIDAMERICA,
    cols: 1,
    rows: 1
  },
  {
    text: "GR",
    name: "Gulf",
    color: COLOR_GULF,
    cols: 1,
    rows: 1
  },
  {
    text: "CN",
    name: "Central",
    color: COLOR_CENTRAL,
    cols: 1,
    rows: 1
  },
  {
    text: "SR",
    name: "Southern",
    color: COLOR_SOUTHERN,
    cols: 1,
    rows: 1
  },
  {
    text: "ER",
    name: "Eastern",
    color: COLOR_EASTERN,
    cols: 1,
    rows: 1
  },
  {
    text: "LD",
    name: "Canada",
    color: COLOR_CANADA,
    cols: 1,
    rows: 1
  }
]

const DISTRICTS: Tile[] = [{
  text: "PC",
  name: "Provincial",
  color: COLOR_CANADA,
  cols: 5,
  rows: 1
},
  {
    text: "OC",
    name: "Ontario",
    color: COLOR_CANADA,
    cols: 5,
    rows: 1
  },
  {
    text: "NW",
    name: "Northwest",
    color: COLOR_WESTERN,
    cols: 1,
    rows: 1
  },
  {
    text: "WK",
    name: "Western Rockies",
    color: COLOR_MIDAMERICA,
    cols: 2,
    rows: 3
  },
  {
    text: "GP",
    name: "Great Plains",
    color: COLOR_MIDAMERICA,
    cols: 1,
    rows: 2
  },
  {
    text: "MW",
    name: "Midwest",
    color: COLOR_MIDAMERICA,
    cols: 1,
    rows: 1
  },
  {
    text: "",
    name: "",
    cols: 1,
    rows: 1,
    color: ""
  },
  {
    text: "GL",
    name: "Great Lakes",
    color: COLOR_CENTRAL,
    cols: 1,
    rows: 1
  },
  {
    text: "",
    name: "",
    cols: 1,
    rows: 1,
    color: ""
  },
  {
    text: "UY",
    name: "Upstate New York",
    cols: 1,
    rows: 1,
    color: COLOR_EASTERN
  },
  {
    text: "NE",
    name: "Northeast",
    cols: 1,
    rows: 1,
    color: COLOR_EASTERN
  },
  {
    text: "NL",
    name: "Northern California",
    color: COLOR_WESTERN,
    cols: 1,
    rows: 1
  },
  {
    text: "MD",
    name: "Midway",
    color: COLOR_MIDAMERICA,
    cols: 1,
    rows: 1
  },
  {
    text: "GW",
    name: "Gateway",
    color: COLOR_CENTRAL,
    cols: 1,
    rows: 1
  },
  {
    text: "CN",
    name: "Central",
    color: COLOR_CENTRAL,
    cols: 1,
    rows: 1
  },
  {
    text: "AT",
    name: "Atlantic",
    cols: 1,
    rows: 1,
    color: COLOR_EASTERN
  },
  {
    text: "DV",
    name: "Delaware Valley",
    cols: 1,
    rows: 1,
    color: COLOR_EASTERN
  },
  {
    text: "NY",
    name: "New York Metro",
    cols: 1,
    rows: 1,
    color: COLOR_EASTERN
  },
  {
    text: "BA",
    name: "Bay Area",
    color: COLOR_WESTERN,
    cols: 1,
    rows: 1
  },
  {
    text: "PL",
    name: "Plains",
    color: COLOR_MIDAMERICA,
    cols: 2,
    rows: 1
  },
  {
    text: "OV",
    name: "Ohio Valley",
    color: COLOR_CENTRAL,
    cols: 2,
    rows: 1
  },
  {
    text: "PT",
    name: "Potomac",
    color: COLOR_SOUTHERN,
    cols: 1,
    rows: 1
  },
  {
    text: "",
    name: "",
    cols: 2,
    rows: 4,
    color: ""
  },
  {
    text: "LA",
    name: "Los Angeles Metro",
    color: COLOR_WESTERN,
    cols: 1,
    rows: 1
  },
  {
    text: "DT",
    name: "Desert",
    color: COLOR_WESTERN,
    cols: 1,
    rows: 1
  },
  {
    text: "MT",
    name: "Mountain",
    color: COLOR_MIDAMERICA,
    cols: 1,
    rows: 1
  },
  {
    text: "LS",
    name: "Lone Star",
    color: COLOR_GULF,
    cols: 1,
    rows: 2
  },
  {
    text: "MV",
    name: "Mississippi Valley",
    color: COLOR_GULF,
    cols: 1,
    rows: 2
  },
  {
    text: "MS",
    name: "Mid-South",
    color: COLOR_GULF,
    cols: 1,
    rows: 1
  },
  {
    text: "CA",
    name: "Carolina",
    color: COLOR_SOUTHERN,
    cols: 1,
    rows: 1
  },
  {
    text: "PD",
    name: "Piedmont",
    color: COLOR_SOUTHERN,
    cols: 1,
    rows: 1
  },
  {
    text: "",
    name: "",
    color: "",
    cols: 1,
    rows: 1
  },
  {
    text: "SL",
    name: "Southern California",
    color: COLOR_WESTERN,
    cols: 1,
    rows: 1
  },
  {
    text: "SW",
    name: "Southwest",
    color: COLOR_GULF,
    cols: 1,
    rows: 1
  },
  {
    text: "DL",
    name: "Delta",
    color: COLOR_GULF,
    cols: 1,
    rows: 1
  },
  {
    text: "GA",
    name: "Georgia",
    color: COLOR_SOUTHERN,
    cols: 1,
    rows: 1
  },
  {
    text: "",
    name: "",
    cols: 1,
    rows: 1,
    color: ""
  },
  {
    text: "",
    name: "",
    cols: 3,
    rows: 1,
    color: ""
  },
  {
    text: "GC",
    name: "Gulf Coast",
    color: COLOR_GULF,
    cols: 1,
    rows: 1
  },
  {
    text: "",
    name: "",
    cols: 3,
    rows: 1,
    color: ""
  },
  {
    text: "FL",
    name: "Florida",
    color: COLOR_SOUTHERN,
    cols: 1,
    rows: 1
  }
]

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  regions = REGIONS;
  districts = DISTRICTS;

  @ViewChild("regionsGroup") regionsGroup!: MatButtonToggleGroup;
  @ViewChildren("regionToggle") regionToggles!: QueryList<MatButtonToggle>;

  @ViewChild("districtsGroup") districtsGroup!: MatButtonToggleGroup;
  @ViewChildren("districtToggle") districtToggles!: QueryList<MatButtonToggle>;

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.regionToggles.forEach((toggle) => (toggle.buttonToggleGroup = this.regionsGroup));
      this.districtToggles.forEach((toggle) => (toggle.buttonToggleGroup = this.districtsGroup));
    })
  }

  ngOnInit(): void {
  }

}

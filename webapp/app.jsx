import React from 'react';
import ReactDOM from 'react-dom';
import ol from 'openlayers';
import {IntlProvider} from 'react-intl';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Button from '@boundlessgeo/sdk/components/Button';
import Header from '@boundlessgeo/sdk/components/Header';
import enMessages from '@boundlessgeo/sdk/locale/en';
import InfoPopup from '@boundlessgeo/sdk/components/InfoPopup';
import MapPanel from '@boundlessgeo/sdk/components/MapPanel';
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

import LayerList from '@boundlessgeo/sdk/components/LayerList';
import Zoom from '@boundlessgeo/sdk/components/Zoom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });



                    var textStyleCache_white_lake={}
                    var clusterStyleCache_white_lake={}
                    var style_white_lake = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_white_lake'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 3}),
                            fill: new ol.style.Fill({color: "rgba(130,104,107,1.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_white_lake = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_white_lake'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 3}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_icww3ft_wide={}
                    var clusterStyleCache_icww3ft_wide={}
                    var style_icww3ft_wide = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_icww3ft_wide'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.674509803922)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(163,90,176,0.674509803922)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_icww3ft_wide = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_icww3ft_wide'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_noaa_shoreline_la_icww={}
                    var clusterStyleCache_noaa_shoreline_la_icww={}
                    var style_noaa_shoreline_la_icww = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_noaa_shoreline_la_icww'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(137,229,171,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_noaa_shoreline_la_icww = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_noaa_shoreline_la_icww'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world imagery',
    source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        attributions: [new ol.Attribution({ html: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_white_lake = new ol.layer.Vector({
                    opacity: 0.71,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_white_lake.json'
                            }),
                     
                    style: style_white_lake,
                    selectedStyle: selectionStyle_white_lake,
                    title: "White_Lake",
                    id: "White_Lake20170307204119612",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["SITE_CODE", "NO_OF_DOCS", "USE", "SURF_INT", "PARISH_COD", "PLANNING_D", "DEPARTMENT", "SEQUENCE_N", "FACILITY_N", "FACS_AGENC", "ADDRESS1", "LEASE_OWN_", "ADDRESS2", "CITY", "STATE", "PARISHST", "ZIP_CODE", "SEQUENCES", "ID", "SITE_COD_1"],
                    geometryType: "Polygon"
                });
var lyr_icww3ft_wide = new ol.layer.Vector({
                    opacity: 0.25,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_icww3ft_wide.json'
                            }),
                     
                    style: style_icww3ft_wide,
                    selectedStyle: selectionStyle_icww3ft_wide,
                    title: "ICWW-300ft_wide",
                    id: "ICWW_300ft_wide20171107102912589",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["id"],
                    geometryType: "Polygon"
                });
var lyr_noaa_shoreline_la_icww = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_noaa_shoreline_la_icww.json'
                            }),
                     
                    style: style_noaa_shoreline_la_icww,
                    selectedStyle: selectionStyle_noaa_shoreline_la_icww,
                    title: "NOAA_Shoreline_LA_ICWW",
                    id: "NOAA_Shoreline_LA_ICWW20171107102951900",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["SOURCE_ID", "SRC_DATE", "HOR_ACC", "INFORM", "ATTRIBUTE", "VER_DATE", "SRC_RESOLU", "DATA_SOURC", "EX_METH", "DAT_SET_CR", "SRC_CITA", "FIPS_ALPHA", "NOAA_Regio", "Shape_Leng"],
                    geometryType: "Line"
                });

lyr_white_lake.setVisible(true);
lyr_icww3ft_wide.setVisible(true);
lyr_noaa_shoreline_la_icww.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_white_lake,lyr_icww3ft_wide,lyr_noaa_shoreline_la_icww];layersList.unshift(baseLayersGroup);
var layersMap  = {'lyr_white_lake':lyr_white_lake,'lyr_icww3ft_wide':lyr_icww3ft_wide,'lyr_noaa_shoreline_la_icww':lyr_noaa_shoreline_la_icww};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [-10310240.602191, 3485628.888502, -10294647.032259, 3495596.979403];
var unitsConversion = 1;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: []
});



class BasicApp extends React.Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }
  componentDidMount() {
    
  }
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  }
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  }
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  }
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  }
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  }
  _hideAboutPanel(evt) {
    evt.preventDefault();
    document.getElementById('about-panel').style.display = 'none';
  }
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  }
  render() {
    var toolbarOptions = {title:"ICWW in White Lake Wetlands Conservations Area", logo:"logo.jpg"};
    return React.createElement("article", null,
      React.createElement(Header, toolbarOptions ),
      React.createElement("div", {id: 'content'},
        React.createElement(MapPanel, {id: 'map', map: map, extent: originalExtent, useHistory: true}
          ,
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
        )
        ,
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers',
                                        downloadFormat:'GeoJSON', showUpload:true, map:map,
                                        includeLegend:true, allowStyling:true, showTable:true})),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in',
                                    zoomOutTipLabel: 'Zoom out',
                                    delta: 1.2,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  )
      )
    );
  }
}

BasicApp.childContextTypes = {
  muiTheme: React.PropTypes.object
};

ReactDOM.render(<IntlProvider locale='en' messages={enMessages}><BasicApp /></IntlProvider>, document.getElementById('main'));

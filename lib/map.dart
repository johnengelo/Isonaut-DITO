import 'package:flutter/material.dart';
import 'package:latlong/latlong.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:covidapp/markerset.dart';


class SecondTab extends StatelessWidget {
  static const String route = 'overlay_image';

  @override
  Widget build(BuildContext context) {
    var highDensityOverlay = <OverlayImage>[
      OverlayImage(
          bounds: LatLngBounds(LatLng(16.550, 119.140), LatLng(14.350, 123.510)),
          opacity: 0.325,
          imageProvider: 
          AssetImage('assets/images/high-density.png'),
      ),
    ];
    return Scaffold(
      backgroundColor: Colors.green,
      body: FlutterMap(
            options: MapOptions(
                    center: LatLng(14.598202, 121.008997),
                    minZoom: 0,
                    ),
            layers: [
              TileLayerOptions(
                  urlTemplate:
                      "https://api.mapbox.com/styles/v1/johnengelo/ckavcllmq1r791ipeulq47lcg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9obmVuZ2VsbyIsImEiOiJja2F1MXhta20xYXplMnhteDB5YXVidzd1In0.4Te3CV5Nt5s337zgGyFrTw",
                  additionalOptions: {
                    'accessToken': 'pk.eyJ1Ijoiam9obmVuZ2VsbyIsImEiOiJja2F1MXhta20xYXplMnhteDB5YXVidzd1In0.4Te3CV5Nt5s337zgGyFrTw',
                    'id': 'mapbox.mapbox-streets-v8',
                  },
              ),
              OverlayImageLayerOptions(
                overlayImages: highDensityOverlay,
              ),
              MarkerLayerOptions(
                markers: markerset,
              )
        ],
      )
    );
  }
}
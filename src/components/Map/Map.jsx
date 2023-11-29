import React from 'react';
import { geoCentroid } from 'd3-geo';
import {Marker} from 'react-simple-maps';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import mapdata from '../../utils/mapdata';

const Map = () => {
  return (
    <ComposableMap
      projection='geoMercator'
      projectionConfig={{
        scale: 100,
        center: [0, 0],
      }}
      fill='white'
      stroke='black'
      stroke-width={1}
    >
      <Geographies geography={mapdata.data}>
        {(geographies) => {
          return (
            <>
              {geographies.geographies.map((geo) => {
                const stateName = geo.properties.name;
                return (
                  <Geography
                    onClick={() => console.log(stateName)}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      hover: {
                        fill: '#FF331F',
                      },
                    }}
                  />
                );
              })}

              {geographies.geographies.map((geo) => {
                const provinceCenter = geoCentroid(geo);
                return (
                  <Marker key={geo.rsmKey} coordinates={provinceCenter}>
                    <text
                        style={{
                        fill: 'black',
                        strokeWidth: 0,
                        fontSize: 8
                        }}
                        textAnchor='middle'
                        >
                        {geo.properties.name}
                    </text>
                  </Marker>
                );
              })}
            </>
          );
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
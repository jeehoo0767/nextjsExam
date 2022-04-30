import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

const Map = ({ data }) => {
  const [myLocation, setMyLocation] = useState<any>('' as any);

  const mapRef = useRef<HTMLElement | null | any>(null);
  const markerRef = useRef<any | null>(null);

  const transLocation = (mapx: number, mapy: number): naver.maps.LatLng => {
    let latLng;
    const point = new naver.maps.Point(mapx, mapy);
    if (naver.maps.TransCoord) {
      latLng = naver.maps.TransCoord.fromTM128ToLatLng(point);
    }

    return latLng;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    // 위치추적에 성공했을때 위치 값을 넣어줍니다.
    function success(position: any) {
      // console.log(position);
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
    function error() {
      setMyLocation({ latitude: 37.4795852, longitude: 126.7978187 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string')
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
        zoomControl: true,
      });
    data.map((item) => {
      console.log(transLocation(item.mapx, item.mapy).x);
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(transLocation(item.mapx, item.mapy).y, transLocation(item.mapx, item.mapy).x),
        map: mapRef.current,
        title: '현재위치',
        visible: true,
      });
    });
  }, [mapRef, myLocation, data]);

  return (
    <>
      <Head>
        <script
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_APP_PUBLIC_NAVER_MAP_API_KEY}&submodules=geocoder`}
          defer={false}
        ></script>
      </Head>
      <div id="map" ref={mapRef} style={{ width: '1200px', height: '600px' }}></div>
    </>
  );
};

export default Map;

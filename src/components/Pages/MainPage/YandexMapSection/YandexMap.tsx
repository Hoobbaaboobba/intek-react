import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  return (
    <>
      <div className="hidden h-[400px] w-[700px] border-t-4 border-main-blue sm:block">
        <YMaps>
          <Map
            defaultState={{
              center: [55.92, 37.673],
              zoom: 9,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            width={700}
            height={400}
          >
            <Placemark defaultGeometry={[55.92, 37.673]} />
          </Map>
        </YMaps>
      </div>
      <div className="block h-[250px] w-[350px] border-t-4 border-main-blue sm:hidden">
        <YMaps>
          <Map
            defaultState={{
              center: [55.92, 37.673],
              zoom: 9,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            width={350}
            height={250}
          >
            <Placemark defaultGeometry={[55.92, 37.673]} />
          </Map>
        </YMaps>
      </div>
    </>
  );
};

export default YandexMap;

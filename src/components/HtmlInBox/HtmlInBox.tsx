import { useState } from "react";
import { Html } from "@react-three/drei";
import { THtmlInBox } from "../../models/THtmlInBox";
import "./htmlInBox.css";

const weather_container_styles = {
  padding: "1rem",
  borderRadius: ".5rem",
  color: "#FFF6E9",
  background: "linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)",
};

function HtmlInBox({ position, index, rotation, weatherData }: THtmlInBox) {
  const [hidden, setVisible] = useState(false);

  const isVisible = (isVisible: boolean) => {
    setVisible(!isVisible);
    // возвращаем null из-за типизации onOcclude
    return null;
  };

  return (
    <Html
      key={index}
      style={{
        color: "black",
        transition: "all 0.2s",
        opacity: hidden ? 0 : 1,
        transform: `scale(${hidden ? 0.5 : 1})`,
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        KhtmlUserSelect: "none",
      }}
      distanceFactor={1.5}
      position={position}
      rotation={rotation}
      transform
      occlude
      onOcclude={(visible) => isVisible(!visible)}
    >
      <div style={weather_container_styles}>
        <div className="header">
          <div className="header-location">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1rem"
              width="1rem"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
            <h4>{weatherData.name}</h4>
          </div>
          <h6 className="another_days">{index === 0 ? 'сегодня' : 'остальные дни'}</h6>
        </div>
        {index === 0 ? (
          <p className="description">{weatherData.weather[0].description}</p>
        ) : (
          <p className="description">Возможен дождь</p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="main">
            {index === 0 ? (
              <h1>{weatherData.main.temp.toFixed(0)}°C</h1>

            ) : (
              <h1>{index}°C</h1>
            )}
            {index === 0 && (
              <p className="description">
                ощущается как: {weatherData.main.feels_like.toFixed(0)}°C
              </p>
            )}
          </div>
          {index === 0 ? (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
          ) : (
            <img src={`https://openweathermap.org/img/wn/10d@2x.png`} alt="" />
          )}
        </div>
      </div>
    </Html>
  );
}

export default HtmlInBox;

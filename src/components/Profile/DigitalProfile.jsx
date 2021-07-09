import React from "react";
import style from "../../scss/Profile.module.scss";
import { Tooltip, Progress } from "antd";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveRadar } from "@nivo/radar";
import { ResponsiveBullet } from "@nivo/bullet";

const data = {
  name: "nivo",
  color: "hsl(25, 70%, 50%)",
  children: [
    {
      name: "PHP",
      color: "hsl(147, 70%, 50%)",
      loc: 31,
    },
    {
      name: "Angular",
      color: "hsl(147, 70%, 50%)",
      loc: 33,
    },
    {
      name: "Nodejs",
      color: "hsl(147, 70%, 50%)",
      loc: 26,
    },
    {
      name: "React",
      color: "hsl(147, 70%, 50%)",
      children: [
        {
          name: "Redux",
          color: "hsl(147, 70%, 50%)",
          loc: 29,
        },
        {
          name: "Hooks",
          color: "hsl(147, 70%, 50%)",
          loc: 17,
        },
        {
          name: "JSX",
          color: "hsl(147, 70%, 50%)",
          loc: 6,
        },
        {
          name: "JS / ES6",
          color: "hsl(147, 70%, 50%)",
          loc: 22,
        },
      ],
    },
    {
      name: "Vue",
      color: "hsl(147, 70%, 50%)",
      loc: 43,
    },
  ],
};
const data2 = [
  {
    id: "Сидоров",
    color: "hsl(284, 70%, 50%)",
    data: [
      {
        x: "апрель 2021",
        y: 100,
      },
      {
        x: "май 2021",
        y: 126,
      },
      {
        x: "июнь 2021",
        y: 305,
      },
      {
        x: "июль 2021",
        y: 325,
      },
      {
        x: "август 2021",
        y: 459,
      },
    ],
  },
];
const data3 = [
  {
    taste: "Планирование",
    Сидоров: 39,
  },
  {
    taste: "Коммуникация",
    Сидоров: 102,
  },
  {
    taste: "Креативность и стратегическое мышление",
    Сидоров: 67,
  },
  {
    taste: "Лидерство",
    Сидоров: 55,
  },
  {
    taste: "Адаптивность и саморазвитие",
    Сидоров: 32,
  },
  {
    taste: "Презентация",
    Сидоров: 83,
  },
];
const data4 = [
  {
    id: "temp.",
    ranges: [0, 100],
    measures: [19],
    markers: [74],
  },
  {
    id: "power",
    ranges: [0, 100],
    measures: [20],
    markers: [1],
  },
  {
    id: "volume",
    ranges: [17, 0, 100],
    measures: [33],
    markers: [26],
  },
  {
    id: "cost",
    ranges: [0, 100],
    measures: [87],
    markers: [44],
  },
  {
    id: "revenue",
    ranges: [0, 100],
    measures: [96],
    markers: [77],
  },
];
const dataRed = data4.filter((it) => it.measures[0] < 25);
const dataOrange = data4.filter((it) => it.measures[0] >= 25 && it.measures[0] < 50);
// const orangeBulletLength = dataOrange.length;
// const styleOrange = style.chartSoftskill`${orangeBulletLength}`
const dataGreen = data4.filter((it) => it.measures[0] >= 50);

const DigitalProfile = () => {
  return (
    <div>
      <h2>Hard skills</h2>
      <div className={style.profile__personalinfo}>
        <h2>Web разработка</h2>
        <div>
          <Tooltip title="Стажер / Junior / Middle">
            <Progress percent={50} success={{ percent: 20 }} />
            <div className={style.digitalProgress}>
              <span>Стажер</span>
              <span>Junior</span>
              <span>Middle</span>
            </div>
          </Tooltip>
        </div>
        <div className={style.digitalCharts}>
          <div className={style.digitalCharts__sunburst}>
            <ResponsiveSunburst
              data={data}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              id="name"
              value="loc"
              cornerRadius={2}
              borderColor={{ theme: "background" }}
              colors={{ scheme: "nivo" }}
              childColor={{ from: "color", modifiers: [["brighter", 0.1]] }}
              enableArcLabels={true}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 1.4]],
              }}
            />
          </div>
          <div className={style.digitalCharts__sunburst}>
            <ResponsiveLine
              data={data2}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Время",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Баллы",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
      <h2>Soft skills</h2>
      <div className={style.profile__personalinfo}>
        <div className={style.chartSoftskill}>
          <ResponsiveRadar
            data={data3}
            keys={["Сидоров"]}
            indexBy="taste"
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: "color" }}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: "background" }}
            dotBorderWidth={2}
            dotBorderColor={{ from: "color" }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: "nivo" }}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            motionConfig="wobbly"
            isInteractive={true}
            legends={[
              {
                anchor: "top-left",
                direction: "column",
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: "#999",
                symbolSize: 12,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div className={style.chartSoftskill2}>
          <ResponsiveBullet
            data={dataRed}
            margin={{ top: 25, right: 90, bottom: 25, left: 90 }}
            spacing={25}
            titleAlign="start"
            titleOffsetX={-70}
            rangeColors="grey"
            measureColors="red"
            measureSize={1}
            markerSize={1}
          />
        </div>
        <div className={style.chartSoftskill1}>
          <ResponsiveBullet
            data={dataOrange}
            margin={{ top: 25, right: 90, bottom: 25, left: 90 }}
            spacing={25}
            titleAlign="start"
            titleOffsetX={-70}
            rangeColors="grey"
            measureColors="orange"
            measureSize={1}
            markerSize={1}
          />
        </div>
        <div className={style.chartSoftskill2}>
          <ResponsiveBullet
            data={dataGreen}
            margin={{ top: 25, right: 90, bottom: 25, left: 90 }}
            spacing={25}
            titleAlign="start"
            titleOffsetX={-70}
            rangeColors="grey"
            measureColors="green"
            measureSize={1}
            markerSize={1}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalProfile;

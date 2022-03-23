import * as d3 from 'd3';

const weatherUrl =
  'https://gist.githubusercontent.com/S4mLab/443e4c9ec734ce19b202c54b0666e7fe/raw/6d14a1d3778b39d3b3b5e9509ecb17cee738bc9a/weather_data.json';

let wrapperDimensions = {
  width: window.innerWidth * 0.9,
  height: 400,
  margins: {
    top: 15,
    right: 15,
    bottom: 40,
    left: 60,
  },
};

// dimension of the bounds
let graphDimension = {
  width:
    wrapperDimensions.width -
    wrapperDimensions.margins.left -
    wrapperDimensions.margins.right,
  height:
    wrapperDimensions.height -
    wrapperDimensions.margins.top -
    wrapperDimensions.margins.bottom,
};

async function drawLineChart() {
  try {
    const weatherObjsList = await d3.json(weatherUrl);
    console.log(weatherObjsList);
  } catch (err) {
    console.error(err);
  }
}

const wrapper = d3
  .select('#wrapper')
  .append('svg')
  .attr('width', wrapperDimensions.width)
  .attr('height', wrapperDimensions.height);

console.log(wrapper);

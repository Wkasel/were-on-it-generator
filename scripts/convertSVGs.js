/* eslint-disable */

const { parse, stringify } = require('svgson');
const fs = require('fs').promises;
const path = require('path');
const bb = require('svg-path-bounding-box');
const util = require('util');
const Path = require('./getbbox/Path');

const inputSvg = path.resolve(`${__dirname}/../src/assets/images/states.svg`);
const outputFile = filename =>
  path.resolve(`${__dirname}/../src/assets/images/states/${filename}`);

const calculateBbox = path => {
  return new Path(path).getBoundingBox();
};

const svgTemplate = (opts = {}) => {
  if (
    (opts !== undefined && !opts.bounds) ||
    opts.bounds === undefined ||
    opts.bounds === null
  ) {
  } else {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg
         xmlns:svg="http://www.w3.org/2000/svg"
         xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         width="${opts.bounds.width || 0}px"
         height="${opts.bounds.height || 0}px"
         id="svg-${opts.id}">
        <defs
           id="defs-${opts.id}" />
        <!--
          Bounds: ${JSON.stringify(opts.bounds)}
        -->
        <g
           transform="translate(${opts.bounds.width},${opts.bounds.height})"
           id="state-layer">
          <path id="${opts.id}" d="${opts.pathD}"></path>
        </g>
      </svg>`;
  }
};

const saveFile = (filename, data) =>
  fs.writeFile(filename, data, err => {
    if (err) throw err;
    console.log(`${filename} has been saved!`);
  });

const buildSvg = async svgTree => {
  const attrs = await Promise.all(
    svgTree.map(async data => {
      if (data.name === 'path' && data.attributes.d != undefined) {
        return await {
          bounds: await calculateBbox(data.attributes.d),
          pathD: data.attributes.d,
          id: data.attributes.id,
          translateX: 0,
          translateY: 0
        };
      }
    })
  );

  const svg = await Promise.all(
    attrs.map(async data => {
      return await {
        name: data.id,
        template: svgTemplate(data)
      };
    })
  );

  const files = await Promise.all(
    svg.map(async data =>
      saveFile(outputFile(`${data.name}.svg`), data.template)
    )
  );
};

const convertSvg = async () => {
  const data = await fs.readFile(inputSvg, 'UTF-8');
  const svgJson = await parse(data);
  const allSvgs = await buildSvg(svgJson.children[2].children);

  console.log(allSvgs);
};

convertSvg();

import React, { useState } from 'react';

export default function CompositionChart() {
    const [color, setColor] = useState("#61DAFB")
    const [selectedIndex, setSelectedIndex] = useState(0);

    const weights = [40, 25, 15, 10, 5, 3, 2];
    const coins = ["DOT", "SOL", "BNB", "ONT", "OP", "BTC", "ETH"]
    const colors = ['purple', 'red', 'yellow', 'blue', 'green', 'grey', 'black']
    let angle = -Math.PI/2;
    const coords = [[0, -100]];
    weights.forEach(w => {
      angle += Math.PI * w / 50;
      coords.push([100 * Math.cos(angle), 100 * Math.sin(angle)])
    })
    console.log('arr', Array(coords.length-1).map((_, i) => i))

    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="-120 -120 240 240" style={{width: '100%'}} onClick={() => { setColor('red') }}>
      <defs>
        <filter id="outline-filter-0" data-bx-preset="outline 1 2 #bada55" color-interpolation-filters="sRGB" x="-500%" y="-500%" width="1000%" height="1000%">
          <feMorphology in="SourceAlpha" result="dilated" operator="dilate" radius="4"></feMorphology>
          <feFlood flood-color="#bada55" result="flood"></feFlood>
          <feComposite in="flood" in2="dilated" operator="in" result="outline"></feComposite>
          <feMerge>
            <feMergeNode in="outline"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      {Array(coords.length-1).fill(0).map((_, i) => {
        return i !== selectedIndex ? (
          <path style={{fill: 'none', stroke: colors[i], strokeWidth: '10px'}}
                key={i} onClick={() => {setSelectedIndex(i)}}
                d={`M ${coords[i][0]} ${coords[i][1]} A 100 100 0 0 1 ${coords[i+1][0]} ${coords[i+1][1]}`} />
        ) : <></>;
      })}
      {Array(coords.length-1).fill(0).map((_, i) => {
        return i === selectedIndex ? (
          <path style={{fill: 'none', stroke: colors[i], strokeWidth: '10px', filter: 'url(#outline-filter-0)'}}
                key={i} onClick={() => {setSelectedIndex(i)}}
                d={`M ${coords[i][0]} ${coords[i][1]} A 100 100 0 0 1 ${coords[i+1][0]} ${coords[i+1][1]}`} />
        ) : <></>;
      })}

      <text x="0" y="0" textAnchor='middle' style={{fontSize: 'xx-large'}}>{coins[selectedIndex]}</text>
      <text x="0" y="30" textAnchor='middle'>{weights[selectedIndex]}%</text>
  </svg>);
}
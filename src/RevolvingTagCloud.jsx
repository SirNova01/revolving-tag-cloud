import React from 'react';
import './RevolvingTagCloud.css';

const RevolvingTagCloud = ({ tags }) => {
  return (
    <div className="page-cloud">
      <div className="tagcloud-wrapper">
        <div className="tagcloud-controls" style={{ '--num-elements': tags.length }}>
          <div className="tagcloud-rotation">
            <ul className="tagcloud-tags" style={{ '--num-elements': tags.length }}>
              {tags.map((tag, index) => (
                <li className="tagcloud-tag" key={index} style={{ '--index': index + 1 }}>
                  <div><a href={tag.url} target="_blank" rel="noopener noreferrer">{tag.name}</a></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolvingTagCloud;

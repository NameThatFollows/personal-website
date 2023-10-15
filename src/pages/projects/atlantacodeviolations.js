import React from 'react';
import Project from '../../components/Project';
import { StaticImage } from 'gatsby-plugin-image';
import { a, an, ns, s, si } from '../../utils/singular';

export default function AtlantaCodeViolations() {
  const image =
    <StaticImage
      src={`../../images/atlantacodeviolations.jpeg`}
      alt="City map of Atlanta overlaid with a heatmap" />
  return (
    <Project
      title={si ? "An Atlanta Code Violation" : "Atlanta Code Violations"}
      dates="Aug 2019 - Dec 2019"
      link="http://carefulcoding.net"
      featuredImage={image}
    >
      <div>
        <p>A {si ? "" : "set of"} dynamic map-based visualization{s} of {an} Atlanta code violation{s}.</p>
        <p>{si ? "This visualization" : "These visualizations"} display{ns} code violation data from the City of Atlanta and {a} partner{s} in Block-by-Block, an organization based in the English Avenue neighborhood of Atlanta.</p>
        <p>A collection of code violation{s} can often be {a} sign{s} of larger, systemic issue{s} within a city and a neighborhood. Within English Avenue, we see a pattern of {an} absentee and negligent landlord{s} that have let {si ? "a property" : "properties"} deteriorate while they speculate on land value{s}.</p>
        <p>Block-by-Block began documenting {si ? "a code violation" : "these code violatins"} and tracking {si ? "a property" : "these properties"} over time starting in 2016 as a way to formally document the current condition{s} and advocate to the City of Atlanta for attention and {a} resource{s}.</p>
        <p>{si ? "This visualization" : "These visualizations"} serve{s} as one way we can bring attention to {si ? "this" : "these"} neglected neighborhood{s} and raise the quality of life in our {si ? "city" : "cities"}.</p>
        <p>{si ? "This visualization" : "These visualizations"} were created using React and Mapbox along with data from Block-by-Block and the City of Atlanta that was heavily sanitized using {a} Python script{s}.</p>
      </div>
    </Project>
  )
}
